import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Prediction } from '../prediction';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import { HardSwish, Relu6, Lambda } from '../custom_layers';

tf.serialization.registerClass(HardSwish);  // Needed for serialization.
tf.serialization.registerClass(Relu6);  // Needed for serialization.
tf.serialization.registerClass(Lambda);  // Needed for serialization.
tf.ENV.set('WEBGL_PACK', false);
@Component({
  selector: 'app-model-upload',
  templateUrl: './model-upload.component.html',
  styleUrls: ['./model-upload.component.css']
})

export class ModelUploadComponent implements OnInit {
  imageSrc: string;
  @ViewChild('img') imageEl: ElementRef;

  private model;
  predictions: tf.Tensor[];
  
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  loading: boolean;


  constructor() { }


  async ngOnInit() {

    this.loading = true;
    console.log('loading model...');

    const MODEL_URL = this.DJANGO_SERVER + '/media/cropper_model/model.json';
    const cal = await loadGraphModel(MODEL_URL);
    this.model = cal
   //this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
    
    // console.log(this.model.execute());
    this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
    console.log(this.model.summary());
    
    console.log(this.model);
    console.log('Sucessfully loaded model');
    console.log(this.model)

    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.executeAsync(tf.browser.fromPixels(imgEl).expandDims())

          console.log(tf.concat([this.predictions[0].reshape([-1, 4]), this.predictions[1].reshape([100, 1])], 1).arraySync())
        

          
          console.log(imgEl);
          const imgEl2 = this.imageEl.nativeElement;
          
          

          // const tensor =  tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims()
          //model.predict({ImageTensor: tensor})
          console.log([tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims(), tf.image.resizeBilinear(tf.browser.fromPixels(imgEl2), [300, 300]).expandDims()]);
          this.predictions = await this.model.predict([tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims(), tf.image.resizeBilinear(tf.browser.fromPixels(imgEl2), [300, 300]).expandDims()]);
          //this.predictions = await this.model.predict(tf.image.resizeBilinear(tf.browser.fromPixels(imgEl),[300,300]).expandDims(), tf.image.resizeBilinear(tf.browser.fromPixels(imgEl2),[300,300]).expandDims());

          // this.predictions = await this.model.predict(tf.browser.fromPixels(imgEl, imgEl2));
        }, 0);

      };
    }

  }


}


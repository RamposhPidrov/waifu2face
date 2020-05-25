import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Prediction } from '../prediction';
import {loadGraphModel} from '@tensorflow/tfjs-converter';


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
    console.log('Sucessfully loaded model');


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
          //console.log([tf.browser.fromPixels(imgEl).slice([0], [-1, -1, 3])])
          this.predictions = await this.model.executeAsync(tf.browser.fromPixels(imgEl).expandDims())
          
          // var newArr = [];
          // while(this.predictions[0].dataSync().length) newArr.push(this.predictions[0].dataSync());

          // console.log(this.predictions[0].reshape([-1, 4]).arraySync())
          console.log(tf.concat([this.predictions[0].reshape([-1, 4]), this.predictions[1].reshape([100, 1])], 1).arraySync())
        
          // console.log('done')
          // this.predictions = await this.model.predict(imgEl, imgEl);
        }, 0);

      };
    }

  }



}


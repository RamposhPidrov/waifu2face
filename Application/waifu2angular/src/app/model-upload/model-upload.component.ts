import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Prediction } from '../prediction';
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
  predictions: Prediction[];
  
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  loading: boolean;


  constructor() { }


  async ngOnInit() {

    this.loading = true;
    console.log('loading model...');

    this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
    console.log(this.model.summary());
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
          console.log(imgEl);
          const imgEl2 = this.imageEl.nativeElement;
          tf.ENV.set('WEBGL_PACK', false);
          this.predictions = await this.model.predict(imgEl, imgEl2);
        }, 0);

      };
    }

  }


}


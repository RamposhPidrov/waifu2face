import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Prediction } from '../shared/prediction';
import { HardSwish, Relu6, Lambda } from '../shared/custom_layers';

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
  test:string;
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  loading: boolean;


  constructor() { }

  async ngOnInit() {

    this.loading = true;
    console.log('loading model...');

    this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/mobilenet/model.json')
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
          console.log(imgEl);
          const imgEl2 = this.imageEl.nativeElement;
          
          

          // const tensor =  tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims()
          //model.predict({ImageTensor: tensor})
          console.log([tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims(), tf.image.resizeBilinear(tf.browser.fromPixels(imgEl2), [300, 300]).expandDims()]);
          //this.predictions = await this.model.predict([tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims(), tf.image.resizeBilinear(tf.browser.fromPixels(imgEl2), [300, 300]).expandDims()]);

          // this.predictions = await this.model.predict(tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims());
          // this.predictions = await this.model.predict(tf.browser.fromPixels(imgEl).expandDims());
          console.log(tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300,300]).expandDims())
          this.predictions = await this.model.predict(tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300,300]).expandDims());
          
          // this.predictions = await this.model.predict(tf.browser.fromPixels(imgEl, imgEl2));
        }, 0);

      };
    }

  }


}


  // canvas: HTMLCanvasElement;
  // context: CanvasRenderingContext2D;

  // cropCal(){
  //   let canvas = document.getElementById('canvas') as HTMLCanvasElement;
  //   let context = canvas.getContext("2d");
  //   var imageObj = new Image();

  //   imageObj.onload = function() {
  //     // draw cropped image
  //     var sourceX = 150;
  //     var sourceY = 0;
  //     var sourceWidth = 150;
  //     var sourceHeight = 150;
  //     var destWidth = sourceWidth;
  //     var destHeight = sourceHeight;
  //     var destX = canvas.width / 2 - destWidth / 2;
  //     var destY = canvas.height / 2 - destHeight / 2;

  //     context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
  //   };
  //   imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';   

  //   this.canvas = canvas;
  //   this.context = context;

  // }


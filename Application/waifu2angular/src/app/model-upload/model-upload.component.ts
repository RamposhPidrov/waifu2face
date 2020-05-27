import { Component, OnInit, ViewChild, ElementRef, Input, Output, OnChanges, AfterContentInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Prediction } from '../shared/prediction';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import { HardSwish, Relu6, Lambda } from '../shared/custom_layers';
import * as blazeface from '@tensorflow-models/blazeface'
import { imag } from '@tensorflow/tfjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';


tf.serialization.registerClass(HardSwish);  // Needed for serialization.
tf.serialization.registerClass(Relu6);  // Needed for serialization.
tf.serialization.registerClass(Lambda);  // Needed for serialization.
tf.ENV.set('WEBGL_PACK', false);
@Component({
  selector: 'app-model-upload',
  templateUrl: './model-upload.component.html',
  styleUrls: ['./model-upload.component.css']
})

export class ModelUploadComponent implements OnInit, AfterContentInit  {
  imageSrc: string;
  @ViewChild('personimg') imageEl: ElementRef;
  @ViewChild('person2img_uploaded') imageEl2: ElementRef;

  private model;
  private model_cropper;
  private trashhold_cropper = 0.95;
  predictions: tf.Tensor[];
  cropper: tf.Tensor;
  
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  loading: boolean;

  person: Person = new Person(0,"","","","","");
  id: string;
  subscription: Subscription;
  persons;

  constructor( private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService,
    ) {
  }
  
  ngAfterContentInit()	{
    this.getPerson(this.route.snapshot.paramMap.get('id'));

  }


  async ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
      

    this.loading = true;
    console.log('loading model...');
    
    const MODEL_URL = this.DJANGO_SERVER + '/media/cropper_model2/model.json';
    const cal = await loadGraphModel(MODEL_URL);
    this.model_cropper = cal
    console.log(this.model_cropper);
    this.model_cropper = await blazeface.load();
   //this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
    
    console.log(this.model_cropper);
    this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')

    // console.log(this.model.summary());

    const NonMaxSuppression = (node) =>
      tf.image.nonMaxSuppression(
        node.inputs[0], node.inputs[1],
        node.attrs['iouThreshold']);
     
    

    tf.registerOp("NonMaxSuppression", NonMaxSuppression);
    

    console.log('Sucessfully loaded model');
    console.log(this.model)

    this.loading = false;
  }

  getPerson(id) {
    console.log('getPerson called');
    this.dataStorageService.get_person(id)
      .subscribe(
        data => {
          this.person = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
  async govno() {
    const predictions = await this.model_cropper.estimateFaces(document.getElementById('image'), false)
          console.log( predictions)

          
          if (predictions.length > 0) {
            for (let i = 0; i < predictions.length; i++) {
              const start = predictions[i].topLeft;
              const end = predictions[i].bottomRight;
              const size = [end[0] - start[0], end[1] - start[1]];
              console.log(start, end, size)
              // // Render a rectangle over each detected face.
              // ctx.fillRect(start[0], start[1], size[0], size[1]);
            }
          }
  }


  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          // this.cropper = await this.model_cropper.executeAsync((tf.browser.fromPixels(imgEl).expandDims()))
          const predictions = await this.model_cropper.estimateFaces(document.getElementById('image'), false)
          console.log(predictions[0].topLeft);
          

          var img = document.getElementsByClassName('cont')[0];
          var canvas = document.createElement('canvas');
          canvas.id = "mycanvas";
          
          img.appendChild(canvas);
          var context = canvas.getContext('2d');
          var imageObj = new Image();
          const start = predictions[0].topLeft;
          const end = predictions[0].bottomRight;
          const size = [(end[0] - start[0]) , end[1] - start[1]];
          console.log(size);
          canvas.height = size[1] 
          canvas.width = size[0]

          imageObj.onload = function() {
            // draw cropped image
            var sourceX = start[0];
            var sourceY = start[1];
            var sourceWidth = size[1];
            var sourceHeight = size[0];
            var destWidth = size[1];
            var destHeight = size[0];
            var destX = 0;
            var destY = 0;

            context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
          };
          imageObj.src = imgEl.src


          console.log(imgEl);
          const imgEl2 = this.imageEl.nativeElement;
          // const imgEl2 = this.person.image_crop;
          
          this.predictions = await this.model.predict([tf.image.resizeBilinear(tf.browser.fromPixels(imgEl), [300, 300]).expandDims().toFloat(), tf.image.resizeBilinear(tf.browser.fromPixels(imgEl2), [300, 300]).expandDims().toFloat()]);
          console.log(this.predictions)
          
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


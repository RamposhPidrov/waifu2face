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
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


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
  @ViewChild('personimg') imageEl: ElementRef; // img from db
  // @ViewChild('imageEl_canvas') imageEl_canvas: ElementRef; //duplicate from db but canvas

  @ViewChild('person2img_uploaded') imageEl2: ElementRef; //uploaded image
  @ViewChild('cropped_canvas') imageCroppedCanvas: ElementRef; //cropped


  private model;
  private model_cropper;
  private trashhold_cropper = 0.95;
  predictions: tf.Tensor;
  cropper: tf.Tensor;
  
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  loading: boolean;

  person: Person = new Person(0,"","","","","");
  // id: string;
  subscription: Subscription;
  persons;
  checkdoor='not loaded';
  form:FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService,
    ) {
  }
  
  ngAfterContentInit()	{
    this.getPerson(this.route.snapshot.paramMap.get('id'));
    

    // var img = document.getElementsByClassName('cont')[0];
    // var canvas = this.imageCroppedCanvas.nativeElement; //document.createElement('canvas');
    // var canvas = document.getElementById('img1canvas');
    // var canvas = document.createElement('canvas');

    //canvas.id = "mycanvas";
    // var context = canvas.getContext('2d');    
    // img.appendChild(canvas);
    // context.drawImage(this.imageEl);

  

  }


  async ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });

    this.loadModels();

  }

  // loads siamese model and cropper model
  async loadModels(){ 
    this.loading = true;
    console.log('loading model...');
    
    // const MODEL_URL = this.DJANGO_SERVER + '/media/cropper_model2/model.json';
    // const cal = await loadGraphModel(MODEL_URL);
    // this.model_cropper = cal
    console.log(this.model_cropper);
    this.model_cropper = await blazeface.load();
   //this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/model.json')
    
    console.log(this.model_cropper);
    this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/waifu2face/model.json')

    console.log(this.model.summary());

    

    console.log('Sucessfully loaded model');
    console.log(this.model)

    this.loading = false;

  }  



  //when file uploaded
  async fileChangeEvent(event) {


    if (event.target.files && event.target.files[0]) {

      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.form.get('profile').setValue(file);
      }
      if (event.length === 0)
      return;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      //canvas for image 1
      // var canvas = this.imageEl_canvas.nativeElement; //document.createElement('canvas');
      // canvas.height = this.imageEl.nativeElement.offsetHeight;
      // canvas.width = this.imageEl.nativeElement.offsetWidth;
      // var context = canvas.getContext('2d');
      // console.log(context)
      // context.drawImage(this.imageEl.nativeElement,0,0);
      // this.imageEl_canvas.nativeElement
      // end of canvas for image 1

      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          // const imgEl2 = this.imageEl2.nativeElement;
          // const imgEl = this.imageEl.nativeElement;

        
          // this.cropper = await this.model_cropper.executeAsync((tf.browser.fromPixels(imgEl).expandDims()))
          // const predictions = await this.model_cropper.estimateFaces(document.getElementById('image'), false)
          
          const predictions = await this.model_cropper.estimateFaces((this.imageEl2.nativeElement), false)
          console.log(predictions);
          

          var img = document.getElementsByClassName('cont')[0];
          var canvas = this.imageCroppedCanvas.nativeElement; 

          
          
          // img.appendChild(canvas);
          

          var context = canvas.getContext('2d');
          var imageObj = new Image();
          const start = predictions[0].topLeft;
          const end = predictions[0].bottomRight;
          const size = [(end[0] - start[0]) * 1.25 , (end[1] - start[1]) * 1.25];
          console.log(size);
          canvas.height = size[1] 
          canvas.width = size[0]

          imageObj.onload = function() {
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
          imageObj.src = this.imageEl2.nativeElement.src


          console.log('mda');
          console.log(this.imageEl.nativeElement);
          console.log(this.imageCroppedCanvas.nativeElement);
          console.log([tf.browser.fromPixels(this.imageEl.nativeElement).cast('float32').expandDims(), tf.browser.fromPixels(this.imageEl.nativeElement).cast('float32').expandDims()])
          this.predictions = this.model.predict([tf.browser.fromPixels(this.imageEl.nativeElement).expandDims(), tf.browser.fromPixels(this.imageEl.nativeElement).expandDims()]);
          console.log(this.predictions.dataSync())
          console.log('final predict:');
          console.log(this.predictions.dataSync()[0]);
          if(this.predictions.dataSync()[0]<0.5){ //change button
            this.checkdoor='false';
          } else this.checkdoor='true';

          this.log_login(); //send log to server

        }, 0);

      };
    }


  }

  response
  log_login(){
    this.dataStorageService.log_login(this.person, this.form.get('profile').value, this.checkdoor).subscribe(
      (res) => {
        this.response = res;  
      },
      (err) => {  
        console.log(err);
      }
    );
  }

  //http get person by id in url
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
  


}

// async govno() {
//   const predictions = await this.model_cropper.estimateFaces(document.getElementById('image'), false)
//         console.log( predictions)

        
//         if (predictions.length > 0) {
//           for (let i = 0; i < predictions.length; i++) {
//             const start = predictions[i].topLeft;
//             const end = predictions[i].bottomRight;
//             const size = [end[0] - start[0], end[1] - start[1]];
//             console.log(start, end, size)
//             // // Render a rectangle over each detected face.
//             // ctx.fillRect(start[0], start[1], size[0], size[1]);
//           }
//         }
// }
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


import { Prediction } from './../shared/prediction';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import { HardSwish, Relu6, Lambda } from '../shared/custom_layers';
import * as blazeface from '@tensorflow-models/blazeface'
import { imag } from '@tensorflow/tfjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';


import * as mobilenet from '@tensorflow-models/mobilenet';


@Component({
  selector: 'app-model-webcam',
  templateUrl: './model-webcam.component.html',
  styleUrls: ['./model-webcam.component.css']
})
export class ModelWebcamComponent implements OnInit, AfterViewInit {
  imageSrc: string;
  @ViewChild('personimg') imageEl: ElementRef; // img from db
  // @ViewChild('imageEl_canvas') imageEl_canvas: ElementRef; //duplicate from db but canvas
  @ViewChild('person2img_uploaded') imageEl2: ElementRef; //uploaded image
  @ViewChild('cropped_canvas') imageCroppedCanvas: ElementRef; //cropped
  private trashhold_cropper = 0.95;
  cropper: tf.Tensor;
  DJANGO_SERVER = 'http://192.168.1.113:8000'
  person: Person = new Person(0,"","","","","");
  // id: string;
  subscription: Subscription;
  persons;


  @ViewChild('video') video: ElementRef;
  predictions: Prediction[];
  model: any;
  private model_cropper;
  loading = true;

  constructor( private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService,
    ) {
  }

  async ngOnInit() {
    // this.loadModels();
    console.log('loading mobilenet model...');
    // this.model = await tf.loadLayersModel(this.DJANGO_SERVER + '/media/waifu2face/model.json')
    this.model = await mobilenet.load();

    console.log('Sucessfully loaded model');
    this.loading = false;



    setInterval(async () => {
      this.predictions = this.model.predict([tf.browser.fromPixels(this.imageEl.nativeElement).expandDims(), tf.browser.fromPixels(this.video.nativeElement).expandDims()]);
      console.log('predictions');
      console.log(this.predictions);
      // this.predictions = await this.model.classify(this.video.nativeElement);
      await tf.nextFrame();
    }, 3000);
  }

  async ngAfterViewInit() {
    this.getPerson(this.route.snapshot.paramMap.get('id'));


    const vid = this.video.nativeElement;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;

        })
        .catch((err0r) => {
          console.log('Something went wrong!');
        });
    }
  }

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

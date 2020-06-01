import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../../shared/upload.service';
import { ReactiveFormsModule } from '@angular/forms'
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

//FOR CREATION
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  person: Person;
  id: number;

  DJANGO_SERVER = 'http://192.168.1.216:8000'
  form: FormGroup;
  response;
  imageURL;

  public imagePath;
  imgURL: any;
  public message: string;

  @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  @ViewChild('jobcodeInput', {static:false}) jobcodeInputRef:ElementRef;
  

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService,
              private personService: PersonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   

    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

  onChange(event, files) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
    if (event.length === 0)
    return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }

  }
 
  onSubmit() {
    const formData = new FormData();
    //console.log(this.form.get('profile').value);
    formData.append('image', this.form.get('profile').value);
    formData.append('image_crop', this.form.get('profile').value);
    formData.append('name', this.nameInputRef.nativeElement.value);
    formData.append('jobcode', this.jobcodeInputRef.nativeElement.value);

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.image}`;
   
      },
      (err) => {  
        console.log(err);
      }
    );
    this.router.navigate(['/person']);
  }


   

}
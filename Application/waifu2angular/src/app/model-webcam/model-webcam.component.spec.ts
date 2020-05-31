import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelWebcamComponent } from './model-webcam.component';

describe('ModelWebcamComponent', () => {
  let component: ModelWebcamComponent;
  let fixture: ComponentFixture<ModelWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

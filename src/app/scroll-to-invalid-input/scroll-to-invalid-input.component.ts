import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scroll-to-invalid-input',
  templateUrl: './scroll-to-invalid-input.component.html',
  styleUrls: ['./scroll-to-invalid-input.component.css']
})
export class ScrollToInvalidInputComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder ,  private el: ElementRef) {}

  ngOnInit() {
    this.buildForm();
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
      this.scrollToFirstInvalidControl();
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      control1: ["", Validators.required],
      control2: ["", Validators.required],
      control3: ["", Validators.required],
      control4: ["", Validators.required],
      control5: ["", Validators.required]
    });
  }
  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      "form .ng-invalid"
    );

    firstInvalidControl.focus(); //without smooth behavior
  }
}

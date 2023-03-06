import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.css']
})
export class NgSelectComponent implements OnInit {

  @ViewChild('MySelectForm', { static: false })
  mySelectForm!: NgForm;

  isFormDisabled!: boolean;
  mySelectModel!: number;

  selectOptions = [
    {
      customId: 1,
      customText: 'Some Random Text'
    }, {
      customId: 2,
      customText: 'To Show Custom Values'
    }, {
      customId: 3,
      customText: 'With Custom Text Binding'
    }, {
      customId: 4,
      customText: 'My Validation'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {

    this.mySelectForm.form.markAllAsTouched();
    
    if (this.mySelectForm.form.invalid) {
      console.log('Please fill valid details!');
      return false;
    }
    console.log('Form Submitted!');
    return
  }
}

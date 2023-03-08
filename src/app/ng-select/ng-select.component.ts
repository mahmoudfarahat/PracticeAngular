import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { count, Observable, observable } from 'rxjs';

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
  data:any=[]
  count=0
Obs:any
  ngOnInit(): void {
    this.Obs =new Observable<Number[]>((observer) =>{
setInterval(() =>{
this.count++
this.data.push(this.count)
observer.next(this.data )
},1000)
    })

  }

  control = new FormControl();
getData(){

  this.Obs.subscribe((res:any) =>{
    console.log(res)
  })
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
  users = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermione' },
    { id: 4, name: 'Snape' },
    { id: 5, name: 'Hagrid' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'Ron' },
      { id: 4, name: 'Sirius' },
      { id: 5, name: 'Hagrid' },
      { id: 6, name: 'Dumbledore' },
    ];
  }

  trackByUser(index: number, item: any) {
    // return index
    return item.id
  }
}

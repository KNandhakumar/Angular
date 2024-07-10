import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-1',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form-1.component.html',
  styleUrl: './reactive-form-1.component.css'
})
export class ReactiveForm1Component {
  // Country list for reactive form
  countryList:Country[] = [
    new Country ('1','India'),
    new Country ('2','England'),
    new Country ('3','himachal'),
    new Country ('4','russia'),
  ];

  // formGroup for reactive form
    contactForm = new FormGroup({
      firstName: new FormControl('itachi'),
      lastName: new FormControl({
        // this using to add value and disabled
        value: 'uchiha',
        disabled: false
      }),
      email: new FormControl('Akatsuki@gmail.com'),
      gender: new FormControl('male'),
      isMarried: new FormControl(false),
      country: new FormControl('1'),
      address: new FormGroup({
        city: new FormControl('leaf village'),
        street: new FormControl('konaha'),
        pincode: new FormControl('602001'),
      })
    })
    
    onSubmit(){
      console.log(this.contactForm.value)
    }
}

// Country list for reactive form-1
class Country {
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm1Component } from "../reactive-form-1/reactive-form-1.component";
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ReactiveForm1Component],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // Country list for reactive form
  countryList:Country[] = [
    new Country ('1','India'),
    new Country ('2','England'),
    new Country ('3','himachal'),
    new Country ('4','russia'),
  ];

  // formGroup for reactive form
    contactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode: new FormControl(),
      })
    })
    
    onSubmit(){
      console.log(this.contactForm.value)
    }
}

// Country list for reactive form
class Country {
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }
}
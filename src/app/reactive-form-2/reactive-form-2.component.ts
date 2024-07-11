import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form-2',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form-2.component.html',
  styleUrl: './reactive-form-2.component.css'
})
export class ReactiveForm2Component {
  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','Canada'),
    new Country('3','german'),
    new Country('4','russia'), 
  ];

  // form group
  contactForm = new FormGroup({
    firstName : new FormControl('',[Validators.required, Validators.minLength(4)]),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    isMarried : new FormControl('',Validators.requiredTrue),
    country : new FormControl('',Validators.required),
    address : new FormGroup({
      city : new FormControl('',Validators.required),
      street : new FormControl('',Validators.required),
      pincode : new FormControl('',Validators.required)
    })
  });

  onSubmit(){
    console.log(this.contactForm.value)
  }

  // formcontrol for firstName
  get firstname(){
    return this.contactForm.get('firstName');
  }
  // formcontrol for lastName
  get lastname(){
    return this.contactForm.get('lastName');
  }
  // formcontrol for email
  get email(){
    return this.contactForm.get('email');
  }
  // formcontrol for isMarried
  get ismarried(){
    return this.contactForm.get('isMarried')
  }
  // formcontrol for country
  get country(){
    return this.contactForm.get('country')
  }
  // formcontrol for city
  get city(){
    return this.contactForm.get('address')?.get('city')
  }
  // formcontrol for street
  // another form group to get this type 
  get street(){
    return this.contactForm.get('address')?.get('street')
  }
  // formcontrol for pincode
  get pincode(){
    return this.contactForm.get('address')?.get('pincode')
  }
}

// Countrylist for country
class Country {
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }
}

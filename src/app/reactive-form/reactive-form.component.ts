import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      firstName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      gender: new FormControl('', Validators.required),
      isMarried: new FormControl('', Validators.requiredTrue),
      country: new FormControl('', Validators.required),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required),
      })
    })

    // reactive form form controls name get method
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
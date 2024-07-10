import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form-1.component.html',
  styleUrl: './template-driven-form-1.component.css'
})
export class TemplateDrivenForm1Component implements OnInit{

// Country list for template drive form-1
  countryList:Country[] = [
    new Country ('1','India'),
    new Country ('2','England'),
    new Country ('3','himachal'),
    new Country ('4','russia'),
  ];

  // Form Values for template driven for
  onSubmit(form:NgForm){
    console.log(form.value)
  }

  // template driven form-1 default values fetching two way binding
  contact!:Contact;

  ngOnInit():void{
    this.contact = {
      firstName: 'itachi',
      lastName: 'uchiha',
      email: 'Akatsuki@gmail.com',
      gender: 'male',
      isMarried: false,
      country: '1',
      address:{
        city: 'leaf village',
        street: 'konaga',
        pincode: '602001'
      }
    }
  }
}

class Contact {
  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  isMarried!:boolean;
  country!:string;
  address!:{
    city:string;
    street:string;
    pincode:string;
  }
}

// Country list for template drive form-1
class Country {
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  // country list for template driven form
  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','England'),
    new Country('3','himachal'),
    new Country('4','russia'),
  ];
  
  onSubmit(form:NgForm){
    console.log(form.value)
  }
}

// Country list for template drive form
class Country {
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }
}

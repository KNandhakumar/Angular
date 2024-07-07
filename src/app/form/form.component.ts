import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormListComponent } from "../form-list/form-list.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [CommonModule, FormsModule, FormListComponent]
})
export class FormComponent {
  cars:string[] = [];
  carName = '';

  addCar(){
    this.cars.push(this.carName);
    this.carName = '';
    console.log(this.cars)
  }
}

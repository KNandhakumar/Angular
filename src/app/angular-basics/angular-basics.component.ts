import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,} from '@angular/router';
import { max } from 'rxjs';

@Component({
  selector: 'app-angular-basics',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './angular-basics.component.html',
  styleUrl: './angular-basics.component.css'
})
export class AngularBasicsComponent {
  firstName = 'Nandha'; // this is oneway binding code
  lastName = 'kumar'; // this is oneway binding code
  title = 'Angular-Learning'; // this is property binding code
  name = 'Nandhu'; // this is two way binding
  learn = 'Angular Learning'; // String Interpolation
  propertyBinding = 'property binding'; // Property Binding Section 
  isDisabled = true; // Property Binding for button 

  // String Interpolation With Function
  getLearn(){
    return this.learn
  }

  // String Interpolation With Function passing parameters
  getMax(num1:number,num2:number){
    return Math.max(num1,num2);
  }

  color = 'red'; // this is style property

  Clickcount = 0; // Click Event With Expressio
  Clickcount1 = 0; // Click Event With Expression

  // Click Event With Expression
  clickMe(){
    this.Clickcount++;
  }


  // Input Event handling
  value = '';
  value1 = '';
  handleInput(event:any){
    // take this parameter in your function then access this value like Type assertion like this - (event.target as HTMLInputElement).value. target means your targeted input , then input is the Html input elemnt so this type assertion is good practice
    this.value = (event.target as HTMLInputElement).value
  }
}
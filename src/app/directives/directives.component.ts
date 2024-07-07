import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // Structural Directive *NgFor
  title = 'My favourite movies';

  movies = ['Kalki', 'Kgf', 'Life of pie', 'Pirate of the caribean', 'kgf-2'];

  // Structural Directive Array Object *NgFor
  movies1 = [
    {title:'Kalki', director:'nagAshwin',cast:'Prabas,Deepika',year:'2024'},
    {title:'Kgf', director:'Prashanth neel',cast:'Yash,Srinithy',year:'2018'},
    {title:'life of pie', director:'Ang lee',cast:'Irfan khan',year:'2012'},
    {title:'Pirate of the caribean', director:'Rob marshall',cast:'Captain jack sparrow',year:'2003'},
    {title:'kgf-2', director:'Prashanth neel',cast:'Yash,Srinithy',year:'2023'}
  ]

  // Structural Directive *NgSwitch
  num = 0;

  showMe = true; // Structural Directive *NgIf
  showMe1 = true; // Structural Directive ng-template
  
  // Attribute  Directive NgClass
  enableRed = false;
  enableBig = false;
  enableItalic = false;
  enableBold = false;

  status = 'itachi'; // Attribute Directive NgStyle
  color = 'red'; // Attribute Directive NgStyle

  // Date pipe
  toDate = new Date();

  // Uppercase Lowercase pipe
  message = 'Nandhakumar';

  // Slice pipe
  fruit = 'My Fav Papaya';

  // Currency pipe
  price = 100;
}

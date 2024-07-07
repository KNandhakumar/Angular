import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {
  // form list parent to child
  @Input('carsInput')
  cars:string[] = [];
}

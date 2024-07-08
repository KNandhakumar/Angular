import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HooksChildComponent } from "../hooks-child/hooks-child.component";
import { HooksChild1Component } from "../hooks-child-1/hooks-child-1.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hooks',
    standalone: true,
    templateUrl: './hooks.component.html',
    styleUrl: './hooks.component.css',
    imports: [FormsModule, HooksChildComponent, HooksChild1Component, CommonModule]
})
export class HooksComponent {
  // Hook Component NgOnChanges
  title = 'Nandhu';

  // Hook Component NgDoCheck
  title1 = 'Nandhu';

  titles:string[] = [];

  addTitles(){
    this.titles.push(this.title1);
    console.log(this.titles)
  }

  // NgOnDestroy
  disableHeading = false;
}

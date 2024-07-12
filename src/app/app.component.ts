import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AngularBasicsComponent } from "./angular-basics/angular-basics.component";
import { DirectivesComponent } from "./directives/directives.component";
import { FormComponent } from "./form/form.component";
import { HooksComponent } from "./hooks/hooks.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { HttpComponent } from "./http/http.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterLink,CommonModule,RouterOutlet, AngularBasicsComponent, DirectivesComponent, FormComponent, HooksComponent, TemplateDrivenFormComponent, ReactiveFormComponent, HttpComponent]
})
export class AppComponent {
  title = 'Angular-Learning';
  isMenuOpen = false;

  menuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

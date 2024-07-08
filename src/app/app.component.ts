import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularBasicsComponent } from "./angular-basics/angular-basics.component";
import { DirectivesComponent } from "./directives/directives.component";
import { FormComponent } from "./form/form.component";
import { HooksComponent } from "./hooks/hooks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AngularBasicsComponent, DirectivesComponent, FormComponent, HooksComponent]
})
export class AppComponent {
  title = 'Angular-Learning';
}

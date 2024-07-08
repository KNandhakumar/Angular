import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularBasicsComponent } from "./angular-basics/angular-basics.component";
import { DirectivesComponent } from "./directives/directives.component";
import { FormComponent } from "./form/form.component";
<<<<<<< HEAD
import { HooksComponent } from "./hooks/hooks.component";
=======
>>>>>>> 9f6b347a3f20c3da4238a8a12334ad260b061a8a

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, AngularBasicsComponent, DirectivesComponent, FormComponent, HooksComponent]
=======
    imports: [RouterOutlet, AngularBasicsComponent, DirectivesComponent, FormComponent]
>>>>>>> 9f6b347a3f20c3da4238a8a12334ad260b061a8a
})
export class AppComponent {
  title = 'Angular-Learning';
}

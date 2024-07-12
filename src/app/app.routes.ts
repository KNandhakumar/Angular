import { Routes } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { HooksComponent } from './hooks/hooks.component';
import { HttpComponent } from './http/http.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingComponent } from './routing/routing.component';

export const routes: Routes = [
    {path: '', component: AngularBasicsComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'form', component: FormComponent},
    {path: 'hooks', component: HooksComponent},
    {path: 'http', component: HttpComponent},
    {path: 'templateDriven', component: TemplateDrivenFormComponent},
    {path: 'reactive', component: ReactiveFormComponent},
    {path: 'routing', component: RoutingComponent},
];

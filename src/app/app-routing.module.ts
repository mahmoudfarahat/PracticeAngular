import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ResolverResolver } from './resolvers/resolver.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { CanDeactivateGuard } from './Guards/can-deactivate.guard';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { ScrollToInvalidInputComponent } from './scroll-to-invalid-input/scroll-to-invalid-input.component';

const routes: Routes = [
  {path:'scroll', component:ScrollToInvalidInputComponent},
  {path:'ngselect', component:NgSelectComponent , canDeactivate:[CanDeactivateGuard]},
  {path:'directive', component:DirectiveComponent , resolve:{data: ResolverResolver}},
  {path:'forkJoin', component:ForkJoinComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

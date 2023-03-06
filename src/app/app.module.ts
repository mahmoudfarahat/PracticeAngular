import { HighlightDirective } from './directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DirectiveComponent } from './directive/directive.component';
import { ScrollToInvalidInputComponent } from './scroll-to-invalid-input/scroll-to-invalid-input.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DirectiveComponent,
    ScrollToInvalidInputComponent,
    NgSelectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

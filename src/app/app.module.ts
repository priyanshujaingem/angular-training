// Root module of our app

// Module- has one or more component and services
//       - interact and ulitmately render the view in the browser
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveCompComponent } from './directive-comp/directive-comp.component';
import { PipeCompComponent } from './pipe-comp/pipe-comp.component';
import { AddBackgroundDirective } from './add-background.directive';
import { AgeCalcPipe } from './pipe/age-calc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveCompComponent,
    PipeCompComponent,
    AddBackgroundDirective,
    AgeCalcPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Kickstart of bootstrap the app component
})
export class AppModule { }

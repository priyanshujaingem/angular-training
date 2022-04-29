// Root component of our app

// Angular- app has one or more modules
// Component- HTML and CSS
//            - Template -- View (HTML)
//            - Class -- Code, Data & Methods for logic (Typescript)
//            - Metadata -- Information
//                       -- Decorater (Function that provides info about class attached to it)
//                          @Component @NgModule
// Services- contain Business Logic of app

// To start app--- ng serve or npm start (refer to package.json)
import { Component } from '@angular/core';

// Metadata attached in the form of decorater i.e. @Component 
@Component({
  selector: 'app-root', // Representing this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Reactive Form';
}

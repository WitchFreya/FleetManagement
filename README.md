# FleetManagement

This is a proof of concept demonstration for a fleet management application for Software Engineering 339 - Software Architecture and Design  at Iowa State University in Fall of 2018, taught by Lofti ben Othmane. 

We were provided with a sample application found [here](http://sdmay18-18.sd.ece.iastate.edu/) created for a senior design project, however, I found the design to be difficult to follow and the mix of PHP with pseudo-Angular features alongside a separate RESTful API to be overengineered and confusing. As such, I redesigned it from scratch. 

## Technologies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

It uses [Angular Material](https://material.angular.io/) for design.

Data is stored in a [Firebase](https://firebase.google.com/) Firestore using API definitions from the environment files.

Map is created and managed with [AGM](https://angular-maps.com/).

Live demo available on [Firebase Hosting](https://se339-fleet-management.firebaseapp.com/).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



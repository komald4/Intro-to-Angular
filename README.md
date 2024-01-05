# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



<!-- events are in round brackets -->
<!-- attributes are with or without square brackets -->
<!-- variable from .ts file will use [] -->
<!-- @Input() parent values that can be send that can pass -->
<!-- life cycle hooks, constructor runs first followed by ngOnInit() that calls the component -->

<!-- To Do: -->
<!-- create new component, app-biodata.component.ts , name, email, age -->
<!-- data binding: comes from the ts file -->

<!-- Add a botton called Save, bind the event and name, email, age that is changed started with the 2a -->
<!-- name is variable default: "Komal" -->
<!-- When user clicks on the Save button, on this event, add and two characters before name: "--Komal" -->

<!-- this.name=`--${this.name}`; -->

<!-- implement a new form that includes more values about 6 -->
<!-- should include input. dropdown, and text area, radio button** -->
<!-- implement data on load, when form loads, no default value -->
<!-- life cycle ngInit when form loads. need to use set method, not patch -->
<!-- set default value on the ngInit when page first loads -->
<!-- add button to clear form -->
<!-- when user submits, it should check for valid, if not valid, show message/alert -->
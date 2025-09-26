# What is JavaScript?

- Client-side (Browser) as well as Server side programming (NodeJS Platform)
- Client side validations (Form Validation)
- Light-weight
- Compiled (AST) as well as Interpreted (Modern JavaScript)
- Single Threaded (T1) - Web-workers, libuv(C++ ThreadPool)
- Non-blocking I/O
- Asynchronous Programming: Callbacks, Promises, Observables
- Multi-programming paradigm (Object-oriented, Functional, Reactive)
- Scripting Language
- Dynamically typed
- JSON: JavaScript Object Notation; human readable format for transferring the data over wire.
- MEAN: Mongo Express Angular Node
- MERN: Mongo Express React Node

MongoDB stores documents in the form of JSON/BSON format
Express: Web app framework for NodeJS
Angular: JavaScript Framework
NodeJS: Platform

- ECMA Specifications

## NodeJS Installer -

- Node Runtime Environment (NRE)
- Node Package Manager (NPM)
- Node Native Modules (http, os, events, utls, fs etc)

# JavaScript Engines: Chrome->V8, Edge->Chakra, Safari->SpiderMonkey

### JavaScript DataTypes -

- Primitive :String, Number, Boolean, Symbol
- Reference : Object, Array, Function, Date

## ECMAScript 2015+ features

- Arrow function () => {}
- Rest / Spread Operator (...)
- Block Scope variables - let and const
- Destructuring - unpacking of collection (Array - [] / Object - {})
- Template Literals - Back tick ``
- Default Parameters

## Sync vs Async Code

https://github.com/synergy2411/sept25_angular

## Promises

- Container for holding the future value
- LifeCycle : Pending, Settled (Success / Failure)
- Consume : then().catch() / async...await
- Promise API: resolve, reject, race, any, all, allSettled

# TypeScript : JavaScript with type syntax

## Types in TypeScript

- JavaScript: number, string, boolean, symbol, bigint, array, objects, date, function
- Other DataTypes: any, unknown, void, null, never, tuple
- Custom Types: 'type' keyword, class, interface

## TypeScript Project

- npm create vite@latest
- cd 02-ts-basics
- npm install
- npm run dev

## Classes:

- constructor injection

## DECORATORS:

- Class Level : @NgModule, @Component, @Pipe, @Directive, @Injectable
- Property Level : @Input, @Output, @HostBinding, @ViewChild, @ContentChild
- Method Level : @hostListener
- Parameter Level: @Skip, @Root, @Optional

# Various JavaScript Libraries and Framework

- angular (F): 2014; two way binding, Components based, State Management, SPA, templates, Form Validation, quick app bootstrap; MV\* Pattern, DOM Manipulation, Animation, renderer, AoT Compiler etc
- angularjs: v1.x; 2011; library
- react: 35kb in size; vast fast, 2013 by Facebook Team; library; rendering UI quickly and efficiently; Virtual DOM, Diffing Algo, Reconciliation, State, Props, Components, unidirectional data flow etc;
  : react-hook-form for Form Validation;
  : State Management: Redux
  : Single Page Apps: react-router
  : fetch API, axios: Remote Server Calls

- vue (F) : Progressive Framework; two way data binding, duynamic templates, Remote Server Calls, Form Validations, Single Page Apps, State Management Emerging community support
- lodash: small library; utility functionality
- jQuery: small library; find, change, animation, ajax calls, DOM manipulation
- nextjs (F): react based server side framework
- polymer: rich web based components
- stencil: VDOM, Components based
- backbone: MVC Pattern at client side
- knockout: MVVM Pattern; two way data binding
- ember (F): 2010; frequent changes in API

- nest: Scalable server side apps for node platform
- express / koa / hapi/ kraken / sailsjs : web apps framework
- nodejs: platform

## DOM: Document Object Model

- hierarchical representation of the page (HTML Elements)

## Angular CLI Tool

- Project Structure
- Configuration
- Angular Artifacts (building block, classes, functionalities etc)

### Angular CLI Tool Installation

- [sudo] npm install @angular/cli@17 -g
- ng version
- ng new ng-frontend --no-standalone --no-routing
  > stylesheet - CSS
  > SSR - N
- cd ng-frontend
- npm start / ng serve

### Angular CLI Tool Commands

- ng g c components/users
- ng g c components/users/user-img (html, css, spec, ts)
- ng g c components/users/user-info
- ng g c components/ui/button
- ng g c components/playground/life-cycle

# Bootstrap Library

> npm install bootstrap
> modify style property in angular.json file
> Add Bootstrap extension from market place in VS Code

# Component Reusable -

- @Input()
- @Output() + EventEmitter
- Content Project [ng-content]

## Component LifeCycle

# Directive: marker on the UI

- Structural Directives: *ngIf, *ngFor, \*ngSwitch
- Attributes Directives: ngStyle, ngClass

## Custom Directive

> ng g d directives/better-highlight

# Pipes : Format the UI

- currency
- date
- uppercase
- lowercase
- titlecase
- async
- json
- number
- percent

## Custom Pipe

- CountryCodePipe
- ReversePipe
- FilterPipe

> ng g p pipes/country-code

### By default, all custom pipes are pure, runs on pure changes

let user = { name : "Monica" }

user.name = "Ross"; // Impure change

user = { name : "Joey" } // Pure change

let frineds = ["Monica", "Ross", "Joey"]

friends.push("Chandler"); // Impure Change

friends = [...friends, "Chandler"] // Pure change

### Challenge : sort the filtered todo items

# Forms : accepts user inputs

- Template Driven

  > App logic inside template
  > HTML5 validations
  > Template is created asynchronously
  > Static
  > Easy to create

- Reactive Form / Model Driven Form

  > App logic inside component class
  > Angular Validations - Validators
  > Synchronous Form
  > Dynamically generated - FormArray
  > Uses of various Angular built-in Classes - FormControl, FormGroup, FormBuilder, FormArray, Validators etc

  > FormControl : individual form element
  > FormGroup : the form itself
  > FormBuilder : build the form with form controls
  > FormArray : array of FormControl as well as FormGroup
  > : hobbies : [{name : "", frequency : ""}, {}, {}]

## Form / Form Elements - State and Classes

- ngTouched / ngUntouched
- ngDirty / ngPristine
- ngValid / ngInvalid

# Services :

- Injectable
- Dependency Injection
- Loose Coupling
- Singleton Injector
- Frontend Business Logic - State of the app, Remote Server Call, Logging etc
- 'Tree-shaking'

> ng g s services/data
> ng g s services/counter

## Service Singleton Effect Demo

- CounterOneComp
- CounterTwoComp
- CounterService: counter = 0

# RxJS : Reactive Extension for JavaScript

- Observables : XHR Call, Accepting the user input
- Powerful Operators: Creational, Transforming, Filtering, Error Handling (catchError, throwError), Utility (tap) etc
- Subjects: are both observables as well as observer; multicasted

## Observables vs Promises

### Observables

- series of data / events
- both Async and Sync
- PubSub Pattern
- Powerful operators support
- Lazy, by default
- can be multi-casted
- cancelable, anytime

### Promises

- are on shot
- only Async
- eagerly executed
- no operator support
- can't cancel in-between

## Hot and Cold Observables

# HTTP Client : to make Remote Server call

## REST API

- https://api.genderize.io/?name=peter
- https://api.agify.io/?name=pankaj

## Install JSON Server

> npm install json-server@0.17.4 -g
> json-server -v
> json-server --watch db.json [from data folder]

## Expenses App

- CRUD Operations

## App Structure

- ExpenseService : performs CRUD Operations
- ExpensesComponent : host all expenses
- ExpenseItem : individual expense item
- ExpenseForm : add new expense / edit

# Firebase App

- install Firebase SDK
  > npm install firebase
- Save below info -
  > apiKey: "AIzaSyCClHdnaLcxdP5VL3ZPTaX5GjC_j0jkT1w",
  > authDomain: "ng-sept-25.firebaseapp.com",

# Error Handling

- ErrorHandler Interface

# Single Page Apps

- One HTML Page
- Do not re-render / refresh the complete page
- App is bundled and sent over to client in one go
- Fast
- Better UI/UX

## Courses App (http://localhost:3000/courses)

- Pages
- CoursesPage
- CourseItemComponent
- CourseFormPage
  > CourseFormComponent

## Routing Terminologies

- Router Service : Programmatic Navigation
- Routes: Route configurations
- ActivatedRoute Service: access of current URL Path
  > Query Parameter
  > Route Parameter
- Guards:
  > CanActivate: allows / disallows to enter into particular route
  > CanDeactivate: allows / disallows to exit from the active route
  > Resolve: pre-fetching the data
- Nested Routing / Child Routing
- Page Not Found Functionality using "\*\*"
- Redirect: "redirectTo"

# Multi Module App

- Lazy Loading

# App Optimization / Debugging

# Latest Angular Code

> ng new ng-frontend --no-standalone --no-routing

> ng ng new-app

# Testing

## Fixture

- Component Instance
- Template: nativeElement / debugElement
- detectChanges()

## Code Covergae

> ng serve --code-coverage

# Build the Project

> ng build / npm run build

> npm install http-server -g

> http-server (from the dist/app-name/browser folder)

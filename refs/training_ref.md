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

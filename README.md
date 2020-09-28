# reedsy_test

## About you
I started developing in Angular.js in 2016 with MiaPlatform. For them, i was building a customizable CMS application. It was a big system for managing data, display it through tables, cards and charts. 
I am now using Vuejs for roughly two years. In 2018 i started working on a fintech platform which it deals a lot with the creation of documents, and forms. 
The client is fully built with Vue, Vue Router and Vuex, tested with Cypress and Jest.
I currently work for Vivid IoV Labs, a live stream application enriched by a micropayments system.
It's a mobile-first app made from Vue, OnsenUI and Vuex.

### 2.1. What kind of front end projects do you enjoy working on? Why?
I like the Web in general and everyting that concern front end with a an eye on UI and UX. I like to code neat and composable piece of code with performance in mind and follow the Functional way.

### 2.2. Which are your favorite features of HTML5? How have you used them before?
I try to use the new semantic features for structuring HTML in a more meaningful way.
I sometimes play with canvas for fun stuff and i recently had to deal with the video tag.

### 2.3. Explain the difference between creating a DOM element setting innerHTML and using createElement.
Using createElement is less efficient when dealing with big contents. The reason you want to use createElement instead of innerHTML is to keep the reference (in order to use attached handlers for instance) of the element and manage every single attribute of the created node in a more sophisticated way.

In the other hand with innerHTML, you can use template literals or strings to build big chunks of HTML and use event delegation for events like clicks, inputs etc; this beacause the DOM has to be reparsed and and all the handlers attached to the element are gone.

The latter is, of course, more performant but less flexible.

### 2.4. Compare two-way data binding vs one-way data flow.
Binding is a way to connect data and interface objects. 
For instance, a variable that updates its value by a user event occurring in time.
This process could be one-way or two-way flow.

The first is unidirectional. A good example is the view model system of React. In the react render cycle the model updates the view by "injecting" the value in it.

In order to update the model, then, the view "emits" a value on every change using an Event system pattern.

In two-way data binding, speaking in the same context, when a model updates the view the latter will update the model at the same time.

This reactive pattern combines "injecting" and "emitting" techniques.
Much more simply the bidirectional system applies a watcher to the view and one to the model pointing each other.

### 2.5. Why is asynchronous programming important in JavaScript?
Javascript is single-threaded. That means, when dealing with concurrency, it performs all the tasks one at a time instead of parallelizing them. 
An infinite loop, for instance, would lead to a `Maximum call stack size exceeded` error and stop the program. 
In the browser normally every tab and worker has it's own thread.

This is why Async programming is fundamental in Javascript, also referred to as a non-blocking I/O language.

When Javascript runs a DOM API or is waiting for an asynchronous task, instead of blocking the execution, it delegates the process to an internal queue system and performs it when all other tasks have completed. 
This is possible thanks by the Evet Loop.

Asynchronous programming has been evolving from Callbacks to Promises, Async Functions Observables and Streams.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Unit Test
```
npm run unit
```

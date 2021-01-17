# Tv Shows search

The app can be demo-ed here:
[DEMO](https://infallible-cori-79ad95.netlify.app/)

## Tools used

```
@vue/cli 4.5.10
vue: 2.6.11
Node: 15.4.0
vue-router: 3.2.0
vue-rx: 6.2.0
rxjs: 6.6.3
sass-loader: 8.0.2
```

## Installation

Run `npm i` to install all dependencies.

## Development server

Run `npm run serve` for a dev server. The host is on`http://localhost:8080/`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test:unit` to execute the unit tests via [Jest](https://jestjs.io/).

## Features

- Live search functionality
- Detail page
- Filter on genres (click again on selected tag for resetting)
- Responsive

# Design decision

The structure is quite simple and straight-forward. The idea is to use a `views` folder for the components which are used by the router and the `components` folder for the building blocks. In total there are 3 views: Show (main one), Details (lazy loaded) and the NotFound for redirecting wrong urls. Each view makes use of the building blocks to build the page.

While working I am trying as much as possible not to repeat my code and to make the components reusable and extendable.

Also, I am trying not to overload the projects with too many libraries and make the application heavy. This is why I haven't chosen to use a centralized state management library such as Vuex and to use event emitters and propagation instead for handling data among components due to the project size and complexity.

I am using a layered architecture in this app. The top layer is the router, the next layer is the respective view. I bring the data to the views and use them as state tree (root) and then propagate the data to the components (top-to-bottom approach). For example `Search` component emits the data upwards towards the `Show` view and the data is being propagated to the other components while in `Details` I make the call directly in the view component.

## Possible improvements

- Finish the unit testing. Bring it to at least 80% coverage.

## Responsive view

You can use Chrome/Firefox to simulate a mobile/responsive exprience.

> dots icon (top right) >>> More tools >>> developer tools

## Contact

If you would like to stay in touch, this is where you can find me:

My open source projects and sample code: https://github.com/radualex

LinkedIn: https://www.linkedin.com/in/rastoica/

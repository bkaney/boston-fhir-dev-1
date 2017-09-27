# SMART on FHIR Example App

This is a super simple SMART on FHIR client-only app that uses [FHIR/fhir.js][1] as
part of [Boston-FHIR meetup][2].

[1]: https://github.com/FHIR/fhir.js/
[2]: https://www.meetup.com/Boston-FHIR/

## Setup

Install [node][3], recommend using [nvm][4]. Then install the dependencies:

    % npm install

[3]: https://nodejs.org
[4]: https://github.com/creationix/nvm#installation

## Start the watcher

Run the following command:

    % npm start

This will start the webpack development server. You should see something like this in your console:

```
> SMART-bos-fhir-1@0.0.1 start /Users/bkaney/code/boston-fhir/boston-fhir-dev-1
> webpack-dev-server --progress --colors

 10% building modules 1/1 modules 0 active
Project is running at http://localhost:8081/
webpack output is served from /
```

Open the URL that appears (here http://localhost:8081/) in your browser to see the app.

Learn more about
[webpack](http://webpack.github.io/docs/tutorials/getting-started/) (see toward
the bottom of that page about the
[webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)).

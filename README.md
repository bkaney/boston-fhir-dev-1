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

That will run nodemon automatically recreate the bundle.js file for the app to
work whenever a file changes. You will need to run this once after you clone
the repository. Keep the process running while you develop.

Learn more about
[webpack][http://webpack.github.io/docs/tutorials/getting-started/] (see toward
the bottom of that page about the
[webpack-dev-server][https://webpack.github.io/docs/webpack-dev-server.html]).

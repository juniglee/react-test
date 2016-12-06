# World Nomads - Static Legacy

This is the legacy static site that is used to build custom "designer" pages for the WN CMS. Previously this code existed in unsecured Github repositories and use Mixture to run development tasks. This code is intended to be deprecated in time and replaced by [wng-frontend](http://gitlab.yorkstreet.local/wn-custom-apps/wng-frontend). Note: only key pages have been ported from the old, liquid templates. Pages which haven't been ported can be found in src/templates-legacy/ and are trivial to set up.

## Installation

* Install [NPM](https://docs.npmjs.com/getting-started/installing-node): `npm install npm -g`
* Install the [Gulp cli](https://github.com/gulpjs/gulp/blob/master/docs/README.md): `npm install -g gulp-cli`
* Clone the repo.: `git clone git@gitlab.yorkstreet.local:legacy-frontend/wn.git`
* Go to the repo directory: `cd wn`
* Install npm packages: `npm install`

## Usage

* Inside the wn directory, run: `gulp`

That's it! Gulp should open up a localhost browser window which you can start developing with.

## Contributing

When you've finished with your code, remember to:

* Add your changes to a feature branch
* Push changes to the remote repository
* Submit a merge request to an experienced peer
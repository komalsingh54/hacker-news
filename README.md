# Hacker News


# ⚛ Hacker News - React + Express + CI/CD + Heroku


## TOC

- [Motivation](#motivation)
- [Goals](#goals)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Motivation

Hacker News is a community started by Paul Graham for sharing "Anything that good hackers would find interesting. That includes more than hacking and startups. If you had to reduce it to a sentence, the answer might be: anything that gratifies one's intellectual curiosity."
## Goals

My goal is to provide a **well-tested, regularly maintained, easily configurable and adjustable this Project** with support for server side rendering that gives  a good basis to start own project on. As minimal as possible with as much functionality as necessary.


[Screenshot](https://github.com/komalsingh54/Hacker-News/blob/develop/public/Capture.PNG?raw=true)

## Features

This project has out-of-the-box support for the following things:

- General Setup

  - 🔥 Babel 7
  - 📦 Webpack 4
  - 🔥 ESLint 6 (with a set of custom rules which may be mostly identical to AirBnB with some personal flavor added)
  - 🔥 Prettier
  - 🔥 Jest 24
  - 🐐 React Testing Library
  - ✅ Server Side Rendering with Express
  - ✅ Hot Module Reloading (HMR)
  - ✅ CSS Modules
  - ✅ PostCSS
  - ✅ Precommit hooks via lint-staged + Husky
  - ✅ Optional static deployment without the need for Node.js on the server
  - ✅ CI/CD using Circle/CI
  - ✅ Deployment on Heroku

- Libs and Dependencies

  - ⚛ React 16.x (latest), with Hooks!
  - ✅ Redux + Thunk middleware
  - ✅ Reselect
  - ✅ React Router 5
  - ✅ React Helmet


## Installation

As a general recommendation you should create a **fork** of this project first or use GitHub's function so you can adjust it to your own needs, add all the dependencies you need and commit everything back into your own repository.

Once you've forked the repository here on Github, clone it, `cd` into the directory and run `yarn` (or `npm install`) on your command line to install all the dependencies. You're ready to go now!

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 54370 unless otherwise specified in `process.env.PORT`. You can use a `.env` file to specify env vars. If you want to use them in your client side code, don't forget to add them in [./.env](config/env.js#L37).

### Noteworthy scripts:

#### `yarn dev`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode.

#### `yarn build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `yarn test`

Run all tests using jest.


#### `yarn lint:js`

Run ESLint for all JavaScript and TypeScript files

#### `yarn lint`

Run lint:js and lint:css in parallel

#### `yarn analyze`

Starts `webpack-bundle-analyzer` to give you the opportunity to analyze your bundle(s)


By - `Komal Singh`

## License

MIT.
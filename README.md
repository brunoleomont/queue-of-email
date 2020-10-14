<h3 align="center">
	Queue of email in Node.js with Redis.
</h3>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/brunoleomont/queueofemail.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunoleomont/queueofemail.svg">
  
  <a href="https://www.codacy.com/app/brunoleomont/queueofemail?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=brunoleomont/queueofemail&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/70c8e79c83b442278f6c276ebf117ae4.svg">
  </a>

  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunoleomont/queueofemail.svg">
  <a href="https://github.com/brunoleomont/queueofemail/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunoleomont/queueofemail.svg">
  </a>
  
  <a href="https://github.com/brunoleomont/queueofemail/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/brunoleomont/queueofemail.svg">
  </a>
</p>

<p align="center">
<a href="#rocket-technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ballot_box_with_check-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#up-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## [](#technology):rocket: Technology
-  Express — A web framework for Node.js
-  Bull — Premium Queue package for handling distributed jobs

## [](#prerequisites):ballot_box_with_check: Prerequisites
-   [Node.js](https://nodejs.org/en/)
-   [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Redis](https://redis.io/)

## [](#getting-started):up: Getting started

-  Clone this repo
-  Enter the folder `queueofemail`
-  Run `yarn` or `npm install` to install the dependencies
-  Copy the `.env.example` file and create an `.env` file with email and Redis credentials
-  Run `yarn start` and `yarn queue` or `npm start` and `npm run queue` to start the full featured local server
-  Can you use Redis Docker image `docker run --name redis -p 6379:6379 -d -t redis:alpine` 

## [](#license):memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/brunoleomont/queueofemail/blob/master/LICENSE) for more information.

----------

Made with :blue_heart: by brunoleomont  👋  [Get in touch!](https://www.linkedin.com/in/brunoleomont/)

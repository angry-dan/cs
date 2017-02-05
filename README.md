What is this?
=============

It's a skeleton starting place. A blank slate without any preconceived notions of bootstraps or foundations or <insert component framework of your choice>.


Who is it for?
==============

Everyone.


Help?
=====

Ask in #dev-frontend and we'll make everything alright again.


How do I use it?
================


Development time
----------------

1. Put it somewhere useful (most likely the ./frontend folder of a standard deeson drupal project)
```
cd ~/drupal-project-of-choice
git clone --depth=1 git@bitbucket.org:deesongroup6346/component-barebones-starter.git frontend
cd ./frontend
rm -rf .git
```
2. Update node things
```
npm install
```
3. Run the dev server so you can see your works
```
npm start
```
4. Browse to http://localhost:8080/pages/index.php
5. Change things. Pages _should_ auto refresh all the time they have the js included.

You will only have to do 1 and 2 when you start fresh, `npm start` should be enough after that.


Deployment time
---------------

This will vary project to project, but for the most part.

1. Run a production build
```
npm dist
```
2. Commit and deploy.


Webpack?
========

You should read this: http://webpack.github.io/docs/what-is-webpack.html (version 1 for now)


Components?
===========

This bloke does a pretty good job of explaining the thinking: http://engineering.lonelyplanet.com/2014/05/18/a-maintainable-styleguide.html



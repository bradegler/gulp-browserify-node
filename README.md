# Project Template

This repository contains a sample template for building [node.js](www.nodejs.org) web applications.

The project layout is somewhat opinionated but can be customized as needed.

## Client

The

## Gulp Build System

This project uses a modularized [gulp.js](http://gulpjs.com/) system to manage the myriad of tasks that need to occur on a daily basis.

All tasks should be executed from the root folder.
The gulpfile.js in the root folder is just a shell that wraps the tasks contained in this directory and its subdirectories.

### Top Level Tasks

+ Clean the dist directory

```shell
gulp clean
```
+ Build the client distribution & watch for changes

```shell
gulp watch
```
+ Start the node.js server & watch for changes

```shell
gulp server
```
+ Run tests

```shell
gulp test
```

There are many component tasks that make up the top level tasks.

I'm not going to list them here since it should be fairly clear from the code.

### Note

On some machines nodemon and watch can cause issues with user max watches.
To avoid this the below command can be issued to up that setting.

```shell
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Client Build
Converts and packages npm js modules into a browser digestable bundle using [browserify](http://browserify.org/).
All scss files are precompiled to css using [sass](http://sass-lang.com/).
All javascript is linted to enforce standards.
All js, css and images are gzipped.
#### Production
In production mode all css and js is minified.
To enable a production style compile specify --production to your *watch* task.

```shell
gulp watch --production
```

### Server Build
In development mode the server starts as a single instance on port 3000.
The development server can be used to serve the entire application without the use of a webserver.
Static content is hosted by node out of the dist directory just as it would be by nginx.
To access the development server: [http://localhost:3000](http://localhost:3000)

#### Production
In production mode the *server* command starts a cluster of node.js instances on port 3005.
The number of instances varies based on the number of cpu cores available.
The production mode server can also serve the static content but to take advantage of the gzip compression and for the million other benefits of using a real webserver all static content should be served from nginx.

To enable production mode servers specify --production to your *server* task.

```shell
gulp server --production
```

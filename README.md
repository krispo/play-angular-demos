Play-AngularJS demos
====================
Instruction
-----------
* Install Play (the last version) according to [docs](http://www.playframework.com/documentation/2.2.x/Installing). 
* Install MongoDB (the last version) according to [docs](http://docs.mongodb.org/manual/installation/). For convenience, install any Admin UI [tool](http://docs.mongodb.org/ecosystem/tools/administration-interfaces/).
* Clone this repo.
* Go into the dir: `$cd play-angular-demos`.
* Compile and run: `$play compile run`.
* In browser navigate to [http://localhost:9000/](http://localhost:9000/).

By default, the application will serve the data in `PlayAngular` database. You can find and configure MongoDB settings in `/conf/application.conf` file:
```scala
mongodb.servers=["localhost:27017"]
mongodb.db="PlayAngular"
```

Structure
---------
AngularJS has its own routing mechanism provided by [$route](http://docs.angularjs.org/api/ngRoute.$route) service or [ui-router](https://github.com/angular-ui/ui-router) routing framework. So the base approach is to use a RESTful communication beetwen server side and client side. This approach allows us to develop independently on each side of the web application. All independent angularjs apps are collected in the `demos` folder.

To add a new angularjs app named `appname` to the project, we should inform the server about it by adding a routing info to the `/conf/routes` file:
```scala
GET      /appname/              controllers.UIAssets.at(path = "/demos/appname", file = "index.html")
GET      /appname/*file         controllers.UIAssets.at(path = "/demos/appname", file)
```
Object `UIAssets` extends the core `controllers.AssetsBuilder` object.
For convenience, create a new `Appname` object in controller package on the server side. It's just easy to separate and understand the apps.

Then, to use any rest api method, you should register the method in the `/conf/routes` file as well. For example, you want to save some `data` through the `postdata` method with some parameter `param`. You can register this on the server as follows:
```scala
POST    /api/postdata/:param      controllers.Appname.postdata(param)
```
and then call this method in AngularJS app via [$http](http://docs.angularjs.org/api/ng.$http) service:
```javascript
$http.post('/api/getdata/'+param, data).then(successCallback, errorCallback, notifyCallback)
```
---
Watch it [online](http://play-angular-demos.herokuapp.com/).


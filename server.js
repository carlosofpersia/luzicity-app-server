/**
 * @file ./server.js
 */
global.__base = __dirname;

//instalar pm2 para rodar o node
//http://pm2.keymetrics.io/

var cors = require('cors'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    util = require('util'),
    url = require('url'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    config = require(__base + '/configs/AppConfig'),
    firebase = require("firebase");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: '123mudar',
    name: 'carlossantos',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(cors());

config.logger().info(config.title +
    '\n Em execucao desde: ' +
    config.dateTime(1));

app.domain = 'Luzicity';
var arrUrl = {};
app.use(function(req, res, next) {

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, X-Requested-With, X-CSRF-Token');

    arrUrl = ((req.url).substr(1)).split('/');

    //localhost:3000/modulo/controller/action/:id
    next(instanceControllerAction(arrUrl));

});

var instanceControllerAction = function(arrUrl) {
    console.log(arrUrl);

    if (arrUrl.length >= 3) {
        strController = arrUrl[1];
        strAction = arrUrl[2];
        var arrUrlToObj = [
            './controllers',
            arrUrl[0],
            (strController.replace(/^./, strController[0].toUpperCase())) + 'Controller'
        ];

        var params = {};
        if (arrUrl[3] != undefined) {
            params = arrUrl.slice(3, arrUrl.length);
        };

        var obj = require(arrUrlToObj.join('/'));
        var objController = new obj();
        objController.setApp(app);
        objController[strAction + 'Action'](params);

        //
        url = arrUrl.join('');
        config.logger().info('Application is running [' + url + '] -> OK');

    } else {
        throw new Error('Url nao encontrada!');
    }
};

server.listen(3000);
/**
 * @file ./server.js
 */
global.__base = __dirname;

var cors = require('cors')
    , express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , util = require('util')
    , url = require('url')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , passport = require('passport')
    , config = require( __base + '/configs/AppConfig' );
    
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

config.logger().info(config.title + '\n Em execucao desde: ' + config.dateTime(1));

app.use(function ( req, res, next ) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, X-Requested-With, X-CSRF-Token');

//http://localhost:3000/modulo/controller/action/:id

    try {

        //realiza login - valida tudo e joga na sessao;
        /*
        var GoogleAuth = require('./controllers/auth/GoogleAuth');
        var google = new GoogleAuth();
        app = google.use( app );*/

        //bootstrap
        arrUrl = ((req.url).substr(1)).split('/');
        if( arrUrl.length >= 3 ) {
            strController = arrUrl[1];
            strAction = arrUrl[2];
            var arrUrlToObj = [
                './controllers',
                arrUrl[0],
                (strController.replace(/^./, strController[0].toUpperCase()))+'Controller'
            ];
            var obj = require(arrUrlToObj.join('/'));
            var objController = new obj(app);
            objController[strAction + 'Action']();
            //
            console.log(req.url);
            config.logger().info('Application is running ['+req.url+'] -> OK');
            next();
        } else {
            throw new Error('Url nao encontrada!');
        }
    } catch ( err ) {
        //vai para pagina de error.ejs ou saida em json; 
        if( err ) {
            config.logger().error('Something Broke!\n' + err );
            res.status(500).send('Something Broke!<br/>' + err );
        }
    }
});

server.listen(3000);
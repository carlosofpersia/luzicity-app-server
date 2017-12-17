
//usar spawn para herdar classes;



//var e let e const
//const não altera
const helloWorld = 'hello world const';
var oi = 1;
if(oi == 1 ) {
        let helloWorld = 'hello world let';
    console.log(helloWorld);
}
console.log(helloWorld);


//let funciona somente dentro de um bloco if { não sai daqui }





//var colors = require('colors');
//console.log('./app.js'.green);
//console.log('./app.js'.underline.red);



//        (log4js.getLogger()).warn('Sistema nao esta sendo acessado corretamente!');
//        (log4js.getLogger()).error('Saved data was error');
//        (log4js.getLogger()).fatal('Server could not process');
//        (log4js.getLogger()).debug("Some debug messages");

var calculate = function(numA,numB){
	return numA*numB + 10*numB;
}
exports.calculate = calculate;

var myModule = require('./MyModule.js');
var result = myModule.calculate(20,10);
console.log(result);

var calculate = function(numA,numB) {
	return numA*numB + 10*numB;
}
var add = function(numA,numB) {
	return numA + numB;
}
var perform = function() {
	// do something
}
exports.calculate = calculate;
exports.add = add;
exports.perform = perform;




var now = new Date();

var productTransaction = {
    id : 2
    , user: 'carlos'
    , transactionDate: now
    , details:[
        {
            code: 'p01'
            , name: 'ipad 3'
            , price: 600
        }, {
            code: 'p02'
            , name: 'galaxy tab'

            , price: 500
        }, { code: 'p03'
            , name: 'kindle'
            , price: 120
        }
    ]
}


//var log4js = require('log4js');
//log4js.loadAppender('file');
//log4js.addAppender(log4js.appenders.file('c:\temp\myapplication.log'), 'myapplication'); var logger = log4js.getLogger('myapplication'); logger.info('Application is running'); logger.warn('Module cannot be loaded.'); logger.error('Saved data was error'); logger.fatal('Server could not process'); logger.debug("Some debug messages");

//function perform(a,b,callback){ var c = a*b + a; callback(c); }
//perform(10,5,function(result){ console.log(result); })
//function perform(a,b,callback){ // do processing var errorCode = 102; callback(errorCode,'Internal server error'); }
//perform(10,5,function(errCode,msg){ if(errCode){ console.log(msg); } })
//function perform(a,b,callback){ // do processing var errorCode = 102; callback(errorCode,'Internal server error'); }
//perform(10,5,function(errCode,msg){ if(errCode){ console.log(msg); } })
//var log4js = require('log4js'); var logger = log4js.getLogger('myapplication'); logger.info('Application is running'); logger.warn('Module cannot be loaded'); logger.error('Saved data was error'); logger.fatal('Server could not process'); logger.debug("Some debug messages");
//var log4js = require('log4js'); var logger = log4js.getLogger(); logger.info('Application is running'); logger.warn('Module cannot be loaded'); logger.error('Saved data was error'); logger.fatal('Server could not process'); logger.debug("Some debug messages");



//para usar o cors - acesso de uma url em outro site (dominios)
app.use(cors());
app.use(function ( req, res, next ) {
    // Website you wish to allow to connect (cors);
    res.set('Access-Control-Allow-Origin', '*');
    // Website you wish to allow to connect (cors);
    // Request methods you wish to allow
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    // Website you wish to allow to connect (cors);
    // Request headers you wish to allow
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, X-Requested-With, X-CSRF-Token');

//if url nao funcionar:

//    if ('OPTIONS' == req.method){
//        return res.send(200);
//    }
    // Pass to next layer of middleware
    next();
});



    (this.app).get('/home/usuario/perfil/:id/:id2', function( req, res ) {
        console.log('app.get.home.usuario.perfil');
        console.log(req.params /*req.params.id*/ );
        var arrResult = req.params;
        //obtem usuario do banco;
        arrResult.nome = 'carlos eduardo';
        res.json( arrResult );
        //res.contentType('application/json');
        //res.send(JSON.stringify( arrResult ));
    });













mongodb:
db.usuario.update({'_id':1}, {$set:{ '_produtos':{  '_produto_id_1':{  '_id':1, 'tx_nome':'prod_1' },'_produto_id_2':{  '_id':2, 'tx_nome':'prod_2' },'_produto_id_3':{  '_id':3, 'tx_nome':'prod_3' }}}});
db.usuario.update({'_id':}, {$set:{ '_produtos':{  '_produto_id_1':{  '_id':1, 'tx_nome':'prod_1' },'_produto_id_2':{  '_id':2, 'tx_nome':'prod_2' },'_produto_id_3':{  '_id':3, 'tx_nome':'prod_3' }}}});






/*
  try {

        //realiza login - valida tudo e joga na sessao;

    //    var GoogleAuth = require('./controllers/auth/GoogleAuth');
  //      var google = new GoogleAuth();
//        app = google.use( app );



arrUrl = ((req.url).substr(1)).split('/');
        if( arrUrl.length >= 3 ) {
            strController = arrUrl[1];
            strAction = arrUrl[2];
            var arrUrlToObj = [
                './controllers',
                arrUrl[0],
                (strController.replace(/^./, strController[0].toUpperCase()))+'Controller'
            ];

            var params = {};
            if( arrUrl[3] != undefined ) {
                params = arrUrl.slice(3, arrUrl.length);
            };

params.req = req;
params.res = res;
params.next = next;

            var obj = require(arrUrlToObj.join('/'));
            var objController = new obj( app );
            objController[strAction + 'Action']( params );

        //bootstrap

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

*/



/*


var passport = require('passport')
    , session = require('express-session')
    , GoogleStrategy = require('passport-google-oauth2').Strategy;

// API Access link for creating client ID and secret:
// https://code.google.com/apis/console/
var GOOGLE_CLIENT_ID = "98399203155-bc4q9uhgqmru6uaqq49evlg1148mlgvr.apps.googleusercontent.com";
var GOOGLE_CLIENT_SECRET = "HYHSQN666rcu4XN8MPPluPWd";

passport.serializeUser(function (user, callback) {
    console.log('serializing user.');
    callback(null, user);
});

passport.deserializeUser(function (user, callback) {
    console.log('deserialize user.');
    callback(null, user);
});


var processRequest = function (request, accessToken, refreshToken, profile, callback) {
    //
    process.nextTick(function () {
        console.log('id : ' + profile.id);
        console.log('name :' + profile.displayName);
        console.log('email:' + profile.email);
        var objProfile = {
            id : profile.id,
            name: profile.displayName,
            email: profile.email
        };
        var photos = profile.photos;
        var i = 0;
        for ( var i in photos ) {
            console.log('photos: ' + i + ' * '  + photos[i].value);
            objProfile.photos =  photos[i].value;
            i++;
        };
        session.profile = objProfile;
        return callback(null, profile);
    });
};

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://luzicity.com.br:3000/auth/authStrategy/google/callback",
    passReqToCallback: true,
    realm: 'http://luzicity.com.br:3000'
    }, processRequest
));


app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/authStrategy/google/login'
    , function (request, response, next) {

        passport.authenticate('google', {
            failureRedirect: 'luzicity.com.br:3000/auth/authStrategy/google/login',
            session: false,
            scope: [
                'profile',
                'email'
            ]
        })(request, response, next);
    }
);


}

*/

/*
        (this.app).get('/auth/authStrategy/google/use'
            , function (request, response, next) {
            console.log('/auth/authStrategy.google.use');
            ( AuthStrategyController.google )
            .use( request, response, next );
            next();
        });

*/


/*

(this.app).get('/auth/authStrategy/google/callback', function (request, response, next) {
    (new GoogleBusiness()).loginCallback( request, response, next );
});

(this.app).get('/auth/authStrategy/google/use', function (request, response, next) {
    (new GoogleBusiness()).use( request, response, next );
});
*/
//return this.google;


/*

app.get('/login', function (req, res) {
res.render('login', {
user: req.user
});
});


app.get('/', function (req, res) {
    res.render('index', {user: req.user});
});

app.get('/auth/google', function (request, response, next) {
    google.login( request, response, next );
});

app.get('/auth/google/callback', function(request, response, next) {
    console.log('auth/google/callback');
    google.loginCallback(request, response, next);
});


app.get('/profile', function (req, res) {

    console.log('app.get.profile');
    console.log(session.profile.id +' - '+ session.profile.name);
    res.contentType('application/json');
    res.send(JSON.stringify(session.profile));
});

app.get('/logout', function (req, res) {
    console.log('app.get.logout')
    req.logout();
    res.redirect('/login');
});

*/



//var Auth = require('./Auth.js');
//var auth = new Auth();
//auth.google();



//var myjson = {
//    id: 2
//    , name: 'jackson'
//    , email: 'jackson@email.com'
//};
//// check attribute
//console.log(myjson.hasOwnProperty('id'));
//console.log(myjson.hasOwnProperty('name'));
//console.log(myjson.hasOwnProperty('email'));
//console.log(myjson.hasOwnProperty('home'));
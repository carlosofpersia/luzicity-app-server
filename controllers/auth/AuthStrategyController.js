
var GoogleStrategy = require('./GoogleController');
var FacebookStrategy = require('./FacebookController');
var UsernameStrategy = require('./UsernameController');

//var log4js = require('log4js'); 
//var logger = log4js.getLogger(); 
//logger.info('Application is running'); 
//logger.warn('Module cannot be loaded'); 
//logger.error('Saved data was error'); 
//logger.fatal('Server could not process'); 
//logger.debug("Some debug messages");

// constructor 
var Auth = module.exports = function() {
    console.log('constructor');
} 

// method
Auth.prototype.factory = function(flag){ 
    console.log('Auth.prototype.factory');
    return new flag + 'Auth()';
}
// method
Auth.prototype.google = function() {
    try {
        console.log('Auth.prototype.google');

        var google = new GoogleAuth();
        return google;

    } catch ( err ) {
        console.log(err);
        throw new Error('this error is caused by invalid operation'); 
    }
}

Auth.prototype.facebook = function() {
    console.log('Auth.prototype.facebook');
    //
}

Auth.prototype.username = function() {
    console.log('Auth.prototype.username');
    //
}




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
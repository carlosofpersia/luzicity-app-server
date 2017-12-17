
//talvez essa classe nao seja 
//controller e sim businnes pois a 
//AuthStrategy quem vai resolver as coisas

//GoogleBusiness

var appConfig = require(__base + '/configs/AppConfig.js');

var passport = require('passport')
    , session = require('express-session')
    , GoogleStrategy = require('passport-google-oauth2').Strategy;

// constructor 
var GoogleBusiness = module.exports = function( app ) {

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
        callbackURL: '/auth/authStrategy/google/callback',
        passReqToCallback: true,
        realm: 'luzicity.com.br:3000'
        }, processRequest
    ));

   app.use( passport.initialize() );
   app.use( passport.session() );

};

GoogleBusiness.prototype.login = function ( request, response, next ) {

    console.log('GoogleBusiness.prototype.login');
    passport.authenticate('google', {
        failureRedirect: '/auth/authStrategy/google/login',
        session: false,
        scope: [
            'profile',
            'email'
        ]
    })(request, response, next);
}

GoogleBusiness.prototype.loginCallback = function (request, response, next) {

    console.log('GoogleBusiness.prototype.loginCallback');
    passport.authenticate('google', {
        successRedirect: 'http://luzicity.com.br:8100/#/app/profile',
        failureRedirect: '/auth/authStrategy/google/errorLogin'
    })(request, response, next);
};

GoogleBusiness.prototype.errorLogin = function (request, response, next) {

    console.log('GoogleBusiness.prototype.errorLogin');
    response.contentType('application/json');
    response.send(JSON.stringify({'user':'carlosofpersia'}));
};

GoogleBusiness.prototype.ensureAuthenticated = function (req, res, next) {

    console.log('function.EnsureAuthenticated: ' + req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('luzicity.com.br:8100/#/app/auth/google/login');
};
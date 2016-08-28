
var passport = require('passport')
    , session = require('express-session')
    , GoogleStrategy = require('passport-google-oauth2').Strategy;

// constructor 
var GoogleAuth = module.exports = function() {
    console.log('constructor GoogleAuth');
};

GoogleAuth.prototype.login = function (request, response, next) {
    passport.authenticate('google', {
        failureRedirect: '/login',
        session: false,
        scope: [
            'profile',
            'email'
        ]
    })(request, response, next);
};

GoogleAuth.prototype.loginCallback = function (request, response, next) {
    passport.authenticate('google', {
        successRedirect: 'http://luzicity.com.br:8100/#/app/auth/google/callback',
        failureRedirect: '/login'
    })(request, response, next);
};

GoogleAuth.prototype.processRequest = function (request, accessToken, refreshToken, profile, callback) {
    console.log('GoogleAuth.prototype.processRequest');
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

GoogleAuth.prototype.ensureAuthenticated = function (req, res, next) {
    console.log('function.EnsureAuthenticated: ' + req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

GoogleAuth.prototype.use = function(app) {

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

    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://luzicity.com.br:3000/auth/google/callback",
        passReqToCallback: true,
        realm: 'http://luzicity.com.br:3000'
        }, this.processRequest
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    return app;
};
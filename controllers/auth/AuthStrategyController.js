
//AuthStrategyController
var AbstractController = require( __base + '/library/abstract/AbstractController');

// constructor 
var AuthStrategyController = module.exports = function() {
    console.log('constructor -> AuthStrategyController');
};
AuthStrategyController.prototype = new AbstractController();
AuthStrategyController.prototype.constructor = AuthStrategyController;

// method google
AuthStrategyController.prototype.googleAction = function( params ) {
    try {

        var GoogleBusiness = GoogleBusiness || require( __base + '/business/GoogleBusiness');
        //realiza login - valida tudo e joga na sessao;
        var authGoogle = new GoogleBusiness( this.getApp() );
        ( this.getApp() ).get('/auth/authStrategy/google/login'
            , function (request, response, next) {
            console.log('AuthStrategyController.google.login');
            authGoogle.login( request, response, next );
        });

        ( this.getApp() ).get('/auth/authStrategy/google/callback'
            , function (request, response, next) {
            console.log('AuthStrategyController.google.callback');
            authGoogle.loginCallback( request, response, next );
        });

        ( this.getApp() ).get('/auth/authStrategy/google/errorLogin'
            , function (request, response, next) {
            console.log('AuthStrategyController.google.errorLogin');
            authGoogle.errorLogin( request, response, next );
        });

    } catch ( err ) {
        console.log( 'AuthStrategyGoogle: ' + err );
        throw new Error( 'AuthStrategyGoogle: ' + err ); 
    }
};

AuthStrategyController.prototype.facebookAction = function() {
    console.log('Auth.prototype.facebook');
    //
};

AuthStrategyController.prototype.usernameAction = function() {
    try {
        console.log('AuthStrategyController.prototype.usernameAction');
        (this.app).get('/auth/authStrategy/username', function (req, res) {       
            console.log('app.get.auth.authStrategy.username');
            res.render('account', {user:{id:'3', displayName:'Carlos'}});

        });
    } catch ( err ) {
        console.log( 'AuthStrategyUsername: ' + err );
        throw new Error( 'AuthStrategyUsername: ' + err ); 
    }
};

AuthStrategyController.prototype.logoutAction = function( params ) {
    try {
        console.log('AuthStrategyController.Logout');
        (this.app).get('/auth/authStrategy/logout', function (request, response, next) {
            sess = request.session;
            response.contentType('application/json');
            response.send( JSON.stringify( sess.profile ) );
        });
    } catch ( err ) {
        console.log( 'AuthStrategyUsername: ' + err );
        throw new Error( 'AuthStrategyUsername: ' + err ); 
    }
};

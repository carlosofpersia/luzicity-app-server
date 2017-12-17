
var session = require('express-session');

//AbstractController

var AbstractController = module.exports = function() {
	console.log('AbstractController');
};

AbstractController.prototype.setApp = function( app ) {
	this.app = app;
}

AbstractController.prototype.getApp = function () {
	return this.app;
}

AbstractController.prototype.setSession = function ( params ) {
	i = 0;
	for ( var i in params ) {
		session.i = params.i;
	}
}

AbstractController.prototype.getSession = function () {
	return session;
}



//var log4js = require('log4js'); 
//var logger = log4js.getLogger(); 
//logger.info('Application is running'); 
//logger.warn('Module cannot be loaded'); 
//logger.error('Saved data was error'); 
//logger.fatal('Server could not process'); 
//logger.debug("Some debug messages");

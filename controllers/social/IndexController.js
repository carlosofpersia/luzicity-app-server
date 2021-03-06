
//IndexController

var AbstractController = require( __base + '/library/abstract/AbstractController');

var session = require('express-session');

//construct
var IndexController = module.exports = function() {
    console.log('constructor -> IndexController');
};
IndexController.prototype = new AbstractController();
IndexController.prototype.constructor = IndexController;

IndexController.prototype.homeAction = function() {

    console.log('IndexController.prototype.homeAction');
    (this.app).get('/social/index/home', function (req, res) {
		sess = req.session;
	    var params = {
	    	user: {
	    		displayName:'Antonio Donizildo', 
	    		mail:sess.mail, 
	    		mail2:sess.mail2,
			}
		};

var profile = session.profile;
if(    profile    != undefined 
	&& profile.id != undefined ) {

	params.user.googleId = profile.id;
	params.user.googleName = profile.name;
	params.user.googleEmail = profile.email;
}

		console.log('app.get.social.home');
	    /*
	    //saida em json
	    res.contentType('application/json');
	    res.send(JSON.stringify(params));
	    */
	    //saida em html ejs
	    res.render('social/index', {user: params.user});

	    //res.render('social/index', {user: params.user});
	});
};

IndexController.prototype.mailAction = function() {
	
    console.log('IndexController.prototype.mailAction 2');
	app = this.app;
    app.route('/social/index/mail')
    .get(function (req, res) {
    	sess = req.session;
    	console.log('app.get.social.mail.get');
    	sess.mail = 'carloseduardophp@gmail.com';
		res.contentType('text/html');
	    res.send('Mail-method-get get a my mail session: ' + sess.mail);
		//donload
	    //res.end('<b>ok</b>');
	})
	.post(function (req, res) {
		console.log('app.get.social.mail.post');
		sess.mail2 = 'antoniodonizildo@gmail.com';
		res.contentType('text/html');
	    res.send('Mail-method-post Add mail session: <b>OK</b>');
	})
	.put(function (req, res) {
		console.log('app.get.social.mail.put');
		sess.mail = 'carlosofpersia@hotmail.com';
		res.contentType('text/html');
	    res.send('Mail-method-put Update mail session: <b>OK</b>');
	});
};


IndexController.prototype.listAction = function() {

    console.log('IndexController.prototype.listAction');
    (this.app).get('/social/index/list', function (req, res) {
    	sess = req.session;
    	console.log('app.get.social.teste');
		console.log(sess.mail);
		res.contentType('application/json');
	    res.send(JSON.stringify(sess));
	    //res.end('<b>ok</b>');
	});

//app.all(...)
//app.post(...)
//app.get(...)
//app.delete(...)
//app.put(...)

    (this.app).post('/teste', function (req, res) {
    	res.send('post');
	});
};
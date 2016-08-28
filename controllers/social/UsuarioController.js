/**
 * @file ./social/controllers/UsuarioController.js
 */

/**********/
//console.log(__dirname);
//console.log(process.argv[1]);

var UsuarioModel = require( __base + '/models/model-mongo/UsuariosModel');
var UsuariosModel = new UsuarioModel();
var usuarioModel = UsuariosModel.model();

/**********/

var UsuarioController = module.exports = function( app ) {
    console.log('constructor -> UsuarioController');
    this.app = app;
};

UsuarioController.prototype.perfilAction = function() {

	/*
		var user = new modelUsuario();
	    user.tx_nome  = 'carlos of persia';
	    user.tx_email = 'carloseduardophp@gmail.com';
	    user._id = 1;
	    user.save();
	*/

	var app = (this.app);
	app.get('/social/usuario/perfil/:_id', function( req, res ) {
		console.log('app.get.social.usuario.perfil');
    	var existemUsuarios = false;
    	usuarioModel.find({ '_id':req.params._id }, function( err, result ) {
	        var totalUsuarios = result.length;
	        console.log('totalUsuarios: '+ totalUsuarios);
	        if( totalUsuarios ) {
	            existemUsuarios = true;
	        }
	        res.render('social/perfil', {
	            existemUsuarios:existemUsuarios,
	            usuarioView:result
	        });
    	});

		/*
		 * @todo carloss, parei aqui!
		 * obtem usuario do banco aqui!;
		 */

		//arrResult.tx_nome = 'carlos eduardo';
		//res.json( {} );
	});
};

UsuarioController.prototype.manterAction = function() {
	/*
	(this.app).route('/social/usuario/manter')
	.post( function( req, res ) {
		console.log('[Adicionar].app.post.social.usuario.manter');
		try {
			msg    = 'Cadastro com sucesso';
			status = true;
		} catch( ex ) {
			msg    = 'Error:' + ex;
			status = false;
		};
		arrResult = {
			msg:msg,
			status:status,
		};
		res.contentType('application/json');
	    //res.send(JSON.stringify( arrResult ));
	    res.json( arrResult );
	})
	.put(function( req, res ) {
		console.log('[Alterar].app.put.social.usuario.manter');
		try {
			msg    = 'Alterado com sucesso';
			status = true;
		} catch( ex ) {
			msg    = 'Error:' + ex;
			status = false;
		};
		arrResult = {
			msg:msg,
			status:status,
		};
		res.contentType('application/json');
	    res.send(JSON.stringify( arrResult ));
	});
	.delete(function( req, res ) {
		console.log('[Deletar].app.delete.social.usuario.manter');
		try {
			msg    = 'Delete com sucesso';
			status = true;
		} catch( ex ) {
			msg    = 'Error:' + ex;
			status = false;
		};
		arrResult = {
			msg:msg,
			status:status,
		};
		res.contentType('application/json');
	    res.send(JSON.stringify( arrResult ));
	});
	*/
};

UsuarioController.prototype.accountAction = function() {
	/*
	app.get('/account', google.ensureAuthenticated, function ( req, res ) {
    	console.log(req.user.id + ' - ' + req.user.namedisplayName);
    	res.render('account', {
	        user: req.user
    	});
	});
	*/
}
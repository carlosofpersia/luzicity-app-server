/**
 * @file ./social/controllers/UsuarioController.js
 */

/**********/
//console.log(__dirname);
//console.log(process.argv[1]);

var AbstractController = require( __base + '/library/abstract/AbstractController' );
var UsuariosModel = require( __base + '/models/model-mongo/UsuariosModel' );
var UsuariosModel = new UsuariosModel();
var usuarioModel = UsuariosModel.model();

/**********/

var UsuarioController = module.exports = function() {
    console.log('constructor -> UsuarioController');
};
UsuarioController.prototype = new AbstractController();
UsuarioController.prototype.constructor = UsuarioController;

UsuarioController.prototype.perfilAction = function( params ) {

	try {

console.log('/social/usuario/perfil/user/:_id');
console.log(params);

		var app = this.getApp();
		app.get('/social/usuario/perfil/user/:_id'
			, function( req, res, next ) {
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

    } catch ( err ) {
        console.log( 'UsuarioPerfil: ' + err );
        throw new Error( 'UsuarioPerfil: ' + err );
    }

};

UsuarioController.prototype.manterAction = function( params ) {

console.log('UsuarioController.prototype.manterAction');



	try {

		var app = this.getApp();
		app.route('/social/usuario/manter')
		.post( function( req, res ) {
			console.log('[Adicionar].app.post.social.usuario.manter');
			try {

//curl http://luzicity.com.br:3000/social/usuario/manter/ -X POST  -d '{ "tx_nome":"Carlos", "tx_email": "carlos@yahoo.com.br","id":"9" }' -H 'Content-Type: application/json'
//(-H is short for --header, -d for --data.)

				var user = new usuarioModel();
			    user.tx_nome  = req.body.tx_nome;
			    user.tx_email = req.body.tx_email;
			    user._id      = req.body.id;
			    user.save();

//				var user = new usuarioModel();
//			    user.tx_nome  = 'Brenna Linda';
//			    user.tx_email = 'brenna@hotmail.com';
//			    user._id = 3;
//			    user.save();

				msg    = 'Cadastro com sucesso POST';
				status = true;
			} catch( ex ) {
				msg    = 'Post-Error:' + ex;
				status = false;
			};
			arrResult = {
				msg:msg,
				status:status,
			};
			res.contentType('application/json');
		    //res.send(JSON.stringify( arrResult ));
		    res.json( arrResult );
		}).put( function( req, res ) {
			console.log('[Alterar].app.put.social.usuario.manter');
			try {
				msg    = 'Alterado com sucesso PUT';
				status = true;
			} catch( ex ) {
				msg    = 'Put-Error:' + ex;
				status = false;
			};
			arrResult = {
				msg:msg,
				status:status,
			};
			res.contentType('application/json');
		    res.send(JSON.stringify( arrResult ));
		}).delete( function( req, res ) {
			console.log('[Deletar].app.delete.social.usuario.manter');
			try {

//curl http://luzicity.com.br:3000/social/usuario/manter/ -X DELETE/json'{ "id":"3" }' -H 'Content-Type: application/
//(-H is short for --header, -d for --data.)

			    usuarioModel._id      = req.body.id;
			    usuarioModel.remove();

				msg    = 'Delete com sucesso DELETE';
				status = true;
			} catch( ex ) {
				msg    = 'Delete-Error:' + ex;
				status = false;
			};
			arrResult = {
				msg:msg,
				status:status,
			};
			res.contentType('application/json');
		    res.send(JSON.stringify( arrResult ));
		});
    } catch ( err ) {
        console.log( 'UsuarioPerfil: ' + err );
        throw new Error( 'UsuarioPerfil: ' + err );
    }
};

UsuarioController.prototype.accountAction = function() {

console.log('UsuarioController.prototype.accountAction');

//default parameters
var multiply = function(x, y) {
   y = y | 1;
   return x * y;
};

multiply(3, 2); // 6
multiply(3); // 3


	/*
	app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });
	app.get('/account', google.ensureAuthenticated, function ( req, res ) {
    	console.log(req.user.id + ' - ' + req.user.namedisplayName);
    	res.render('account', {
	        user: req.user
    	});
	});
	*/
}

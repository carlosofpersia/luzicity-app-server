
UsuariosModel = module.exports = function() {

var config = require( __base + '/configs/AppConfig' );
	this.mongoose = config.db.mongoose();
};

UsuariosModel.prototype.model = function() {
	var Schema = this.mongoose.Schema;
	var ObjectId = Schema.ObjectId;
	var ObjSchema = new Schema({
		ref:ObjectId,
		_id:Number,
		tx_nome:String,
		tx_email:String,
	});
	return (this.mongoose).model( 'Usuario', ObjSchema );
};
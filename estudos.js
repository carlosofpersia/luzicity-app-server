
//usar spawn para herdar classes;





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
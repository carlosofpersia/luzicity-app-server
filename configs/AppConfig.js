/**
 * @file ./configs/AppConfig
 */

//criar metodo singleton para log4js;

var log4js = require('log4js');
var strftime = require('strftime');
var mongoose = require('mongoose');//driver do mongodb

var AppConfig = {

    title: 'ProjetoXXX',

    email: 'responsavel@projetoxxx.com',

    logger: function() {

        logger = log4js.getLogger();
        return logger;
    },

    dateTime: function( ptBr ) {
        d = new Date();
        var strFormat = '%Y-%m-%d';
        if( ptBr ) {
            strFormat = '%d-%m-%Y';
        };
        return strftime(strFormat + ' %H:%M:%S', d);
    },

    authStrategy: {
        google: {
            GOOGLE_CLIENT_ID: '98399203155-bc4q9uhgqmru6uaqq49evlg1148mlgvr.apps.googleusercontent.com', 
            GOOGLE_CLIENT_SECRET: 'HYHSQN666rcu4XN8MPPluPWd',
        }
        , facebook: {
            //
        }
        , username: {
            //
        }
    },

    db: {
        mongoose: function() {
            return mongoose.connect('mongodb://localhost/luzicity-app');
        }
        , mysql: {
            //
        }
        , pgsql: {
            //
        }
    }
}

module.exports = AppConfig;
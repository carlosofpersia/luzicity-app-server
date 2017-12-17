//Documentacao: https://github.com/felixge/node-mysql
//require do modulo mysql 'npm install mysql'
var  mysql = require('mysql');

var options = {
    host:    'localhost',
    user:    'root',
    password:'skater',
    database:'curso_nodejs',
    debug:   false,
    port:    '3306'
}
var conn = mysql.createConnection(options);

//CRUD do banco de dados relacional com mysql de forma assyncrona;

var data = new Date();
var horaAtual = data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();

//Insert with nodejs and mysql
conn.query('INSERT INTO aluno (nome, email) VALUES (?, ?)'
             , ['Carlos', 'carloseduardophp@gmail.com']
             , function(err, info) {
    console.log(err);
    console.dir(info);
    console.log(info.insertId);
    //conn.end(); //o use quando tem certeza que quer fechar a conexao, ou s$
});

//Update with node and mysql
conn.query("UPDATE aluno SET nome = ?, email = ? WHERE id = ?"
                       , ['Eduardo - ' + horaAtual, 'carlosofpersia@hotmail.com', 5]
                       , function(err, info) {
console.log(err);
console.dir(info);
//conn.end();
});

//Delete with node and mysql
conn.query("DELETE FROM aluno WHERE id > ?"
                       , [10]
                       , function(err, info) {
    console.log(err);
    console.dir(info);
    //conn.end();
});

//Apresenta as statisticas.
conn.statistics();

//Testando a conexao com query select com sqlInjection.
conn.query("SELECT * FROM aluno WHERE id = ? and nome = ?"
                       , [6, 'Carlos']
                       , function(err, results, fields) {
    if(err) throw err;
    console.log(err);     //Veririca se deu erro.
    console.log(results); // Resultados - Linhas
    console.log(fields);  //Metadados - Colunas

    results.forEach(function(result) {
        console.log('id: '+ result.id + ' | nome: ' + result.nome + ' | e-mail: ' + result.email);
    });

    console.log(results[0].id);
    var nome = results[0].nome;
    console.log(nome);
    console.log(results[0].email);

    conn.end();
});


/*
//Testando a conexao com Streaming query rows.
var query = conn.query("SELECT * FROM aluno");
query.on('error', function(err) {
    // Handle error, an 'end' event will be emitted after this as well
    console.log(err);
}).on('fields', function(fields) {
    // the field packets for the rows to follow
    console.log(fields);
}).on('result', function(row) {
    // Pausing the connnection is useful if your processing involves I/O
    conn.pause();
    processRow(row, function() {
        conn.resume();
    });
}).on('end', function() {
    // all rows have been received
    conn.end();
});
function processRow(row) {
    console.log(row.nome + " - Aqui eu coloco o que quero fazer com o campo");
};
//Fim stream
*/





/*
CREATE  TABLE `curso_nodejs`.`aluno` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NULL ,
  `email` VARCHAR(140) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;
*/

const express = require ('express')
const app = express()
const port = 3000
//configurações par acesso ao mysql
const config = {
    host: 'db',//nome do serviço/container
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require ('mysql')


const sqlInsert = `INSERT INTO people(name) values (?)`
const sqlSelect = `SELECT name FROM people`
var pessoas = []
var titulo = "<h1>Full Cycle Rocks!</h1>"
var html = ""
//connection.query(sqlInsert, 'Candidato do Povo')
var htmlform = 
    " <form action=\"/create\">"+
        " <label for=\"nome\"> Nome </label>"+
        " <input type=\"text\" id=\"nome\" name=\"nome\" value=\"\"> "+
        "<input type=\"submit\" value=\"Salvar\">"+
    "</form> "
//let htmllist = "";
//connection.end()

app.get('/', (req, res) => {

    var connection = mysql.createConnection(config)
    var htmllist = "";

    msg = req.query.msg;
    msghtml = ""
    if(msg){
        msghtml = "<p>"+msg+"</p>";
    }
   
    connection.query(sqlSelect, function (err, result, fields) {
        if (err) throw err;
        pessoas = result;       
        htmllist="<ul>"
       for (var i in pessoas) {
        htmllist+="<li> Pessoa "+i+": "+pessoas[i].name+"</li>"
        //console.log('Candidato '+i+': '+pessoas[i].name)         
       }
       htmllist+="</ul>"
       html = titulo+
            msghtml+
            "<h2>Cadastrar nova Pessoa</h2>"+
            htmlform+
            "<h2>Lista de nomes cadastrada no banco de dados: </h2>"
            +htmllist;
       res.status(200).send(html);       
    });
    
    connection.end();   
})

app.get('/create', (req, res) => {
    var connection = mysql.createConnection(config)
    nome = req.query.nome;
    connection.query(sqlInsert, nome);
    connection.commit();    
    //listCandidatos();
    connection.end();
    res.redirect("/?msg=Nova%20pessoa%20inserida%20com sucesso");
})

app.listen (port, () => {
    console.log ('Rodando na porta' + port)
})


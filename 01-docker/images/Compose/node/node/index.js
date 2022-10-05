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
var html = ""
//connection.query(sqlInsert, 'Candidato do Povo')
var htmlform = " <form action=\"/create\"> <label for=\"nome\"> nome </label> <input type=\"text\" id=\"nome\" name=\"nome\" value=\"\"> <br> <input type=\"submit\" value=\"Submit\"></form> "
//let htmllist = "";
//connection.end()

app.get('/', (req, res) => {
    msg = req.query.msg;
    msghtml = ""
    if(msg){
        msghtml = "<p>"+msg+"</p>";
    }
    let htmllist = listCandidatos();
    console.log("aqui no /: "+htmllist);
    html = msghtml+"<h1>Cadastrar novo Candidato</h1>"+htmlform+"<h1>Lista de Candidatos: </h1>"+htmllist;
    res.status(200).send(html);
})

app.get('/create', (req, res) => {
    var connection = mysql.createConnection(config)
    nome = req.query.nome;
    connection.query(sqlInsert, nome);
    connection.commit();    
    //listCandidatos();
    connection.end();
    res.redirect("/?msg=Novo%20Candidato%20Inserido%20Com Sucesso");
})


app.listen (port, () => {
    console.log ('Rodando na porta' + port)
})

syncfunction listCandidatos(){
    var connection = mysql.createConnection(config)
    var htmllist = "";
    connection.query(sqlSelect, function (err, result, fields) {
        if (err) throw err;
        pessoas = result;       
        htmllist="<ul>"
       for (var i in pessoas) {
        htmllist+="<li> Candidato "+i+": "+pessoas[i].name+"</li>"
        //console.log('Candidato '+i+': '+pessoas[i].name)         
       }
       htmllist+="</ul>"
       console.log("aqui no listar: "+htmllist);       
    });
    connection.end();
    console.log("aqui no listar 2: "+htmllist);
    return htmllist;
    //console.log('Temos '+pessoas.length+" candidatos") 
    //console.log("iniciou")
}


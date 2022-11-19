const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    html = "<html><h1>Hello World Typescript</h1></html>"
    
   res.status(200).send(html);       
   
})

app.listen (port, () => {
    console.log ('Rodando na porta' + port)
})


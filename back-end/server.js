const express = require ('express');
const { fsyncSync } = require('fs');
const fs = require('fs');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000!");
});

function read(){
    const dados = fs.readFileSync('clientes.json', 'utf-8');
    const clientes = JSON.parse(dados);
    return(clientes);
}
console.log(read());

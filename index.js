const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hola',(req,res)=>{
    res.send('Ruta Hola');
})


app.get('/adios',(req,res)=>{
    res.send('Ruta Adios');
})

app.get('/mas',(req,res)=>{
    res.send('Ruta mas');
})

app.listen(3000);
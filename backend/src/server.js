// Importações
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes');

const app = express()

mongoose.connect('mongodb+srv://omnistack:console123@cluster0-skeg4.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Fazendo com que o express receba json na req
app.use(express.json());
app.use(routes);

// A aplicação vai rodar na porta 3333
app.listen(3333)
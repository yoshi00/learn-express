const express = require('express')
const app = express()

//manipular rota com callback
app.get('/', function(req, res){
    res.send('Callback function routes')
})

//manipular com array de callbacks

var cb1 = function(req, res, next){
    console.log("Indo para a proxima callback![1]")
    next()
}


var cb2 = function(req, res, next){
    console.log("Indo para a proxima callback![2]")
    next()
}

var cb3 = function(req, res, next){
    console.log("Ultima callback![3]")
}

app.get("/nextexamplo/1", [cb1, cb2, cb3])

//manipulando com os dois

var ab1 = function(req, res, next){
    console.log("Primeira callback!")
    next()
}

var ab2 = function(req, res, next){
    console.log("Segunda e ultima callback!")
    next()
}

app.get("/rotaexemploo",[ab1, ab2], function(req, res, next){
    console.log("next callback!")
    next()
},function(req, res){
    res.send("Hello from Test")
})

app.listen(3000)
const express = require("express")
const path = require("path")

const app = express()

const caminhobase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.send("estou funcionando com o express")
    console.log(caminhobase)
})

app.listen(3000, () => {
    console.log("miau 3000")
})
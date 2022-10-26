const PORT = process.env.PORT || 5000

//instanciando o express
const express = require('express')
const app = express()

//instanciando o bodyparser para o tratamento do body das urls
const bp = require('body-parser')

//endpoints


//startando o servidor
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
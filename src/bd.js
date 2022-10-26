//instânciando conexão com banco de dados no objeto
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const creat = (req, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(
            //escrever a query no template string :
            `

            `
        )
        //execução da função da cadeia se ela existir
        if (next) {
            next(req, res, next)
        } else {
            //enviar a resposta da requisição de forma assincrona com o res.send caso não exista próxima função
            res.send()
        }

        //desconectar do banco de dados
        client.release()
    } catch (err) {
        res.send(`Error: ${err}`)
    }

}

const read = (req, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(
            //escrever a query no template string :
            `

            `
        )
        //execução da função da cadeia se ela existir
        if (next) {
            next(req, res, next)
        } else {
            //enviar a resposta da requisição de forma assincrona com o res.send caso não exista próxima função
            res.send()
        }
        //desconectar do banco de dados
        client.release()
    } catch (err) {
        res.send(`Error: ${err}`)
    }

}

const updat = (req, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(
            //escrever a query no template string :
            `

            `
        )
        //execução da função da cadeia se ela existir
        if (next) {
            next(req, res, next)
        } else {
            //enviar a resposta da requisição de forma assincrona com o res.send caso não exista próxima função
            res.send()
        }
        //desconectar do banco de dados
        client.release()
    } catch (err) {
        res.send(`Error: ${err}`)
    }

}

const delet = (req, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(
            //escrever a query no template string :
            `

            `
        )
        //execução da função da cadeia se ela existir
        if (next) {
            next(req, res, next)
        } else {
            //enviar a resposta da requisição de forma assincrona com o res.send caso não exista próxima função
            res.send()
        }
        //desconectar do banco de dados
        client.release()
    } catch (err) {
        res.send(`Error: ${err}`)
    }

}


module.exports()
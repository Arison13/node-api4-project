require('dotenv').config()
const express = require("express")
// const path = require('path')

const server = express();
server.use(express.json())

const PORT = process.env.PORT || 8080

server.get('/api/users', (req,res)=> {
    res.json([
        { id: 1, username: 'foo'},
        { id: 2, username: 'bar'},
        { id: 3, username: 'ari'},

    ])
})
server.post('/api/register',(req, res) =>{
    const { username } = req.body;
    if(!username) {
        res.status(500).json({
            message: 'Register to access this endpoint'
        })
    }else {
        res.json(`username ${username} created`)
    }
})

server.post('/api/login',(req, res) =>{
    if(!req.body.username) {
        res.status(500).json({
            message: 'You need to register!'
        })
    }else {
        res.json(`Welcome back ${req.body.username}`)
    }
})


server.listen (PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
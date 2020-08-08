require('dotenv').config()

const express = require('express')
const app = express() 

const morgan = require('morgan')
const cors = require('cors')
const route = require('./routes')

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(express.static('Views'))
app.use('/submit', route)
app.use('/s', (req,res)=>{
    res.json({
        body: req.body
    })
})



//Error Handling
app.use((req,res,next)=>{
    const error = new Error("404 : Not Found")
    error.status = 404 

    next(error)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500) 
    res.json({
        error : {
            message : err.message
        }
    })
})

module.exports = app
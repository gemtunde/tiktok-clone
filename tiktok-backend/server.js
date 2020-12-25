//const express = require('express');
//const mongoose = require('mongoose');

import express from 'express';
import mongoose from 'mongoose';

import Data from './data.js';
import Videos from './dbModel.js';

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

//DB Config
const connection_url = 'mongodb+srv://admin:V0Ugrj02mVcpTNTk@cluster0.eqhyk.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})


//api endpoints
app.get('/', (req, res) => {

    res.status(200).send('hello tunde')
});

app.get('/v1/post', (req, res) => {
    res.status(200).send(Data)
});

// end point for posting/ adding data into the database
app.post('/v2/post', (req, res) => {
    

    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
            if(err){
                res.status(500).send(err)
            } else{
                res.status(201).send(data)
            }
            })
})

// endpoint for retrieving data from the mongodb database

app.get('/v2/post', (req, res) =>{
    Videos.find( (err, data) => {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port, ()=>console.log(`listening on port: ${port}`));

















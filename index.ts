import {Request, Response} from "express";
import User from "./models/User";

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/easyStock', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connecté à Mongoose")
});

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
});


app.get('/createUser', async (req:Request, res:Response) => {
    const user = new User({
        name: 'Jean',
        email: 'kikou@gmail.com',
        password: '123456'
    });
    await user.save();
    console.log(await User.findOne({name: 'Jean'}));
    res.send('User created');
});

app.listen(3000, () => {
    console.log('pouet app listening on port 3000!');
});


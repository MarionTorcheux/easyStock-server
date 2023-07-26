import {Request, Response} from "express";
import User from "./models/User";
import Role from "./models/Role";
import Permission from "./models/Permission"
import permission from "./models/Permission";

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




app.listen(3000, () => {
    console.log('pouet app listening on port 3000!');
});


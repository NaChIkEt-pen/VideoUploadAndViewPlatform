const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require("cors");
const { BSON } = require('mongodb');

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    res.send("hello");
})

app.listen(3000, () => {
  console.log('Server Started')
})

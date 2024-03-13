const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require("cors");
const { BSON } = require('mongodb');
require('dotenv').config()


app.use(express.json())
app.use(cors())

//MONGO AND ROUTES
const MongoPass = process.env.MONGO_PASSWORD; //mongodb pass in .env
mongoose.connect(`mongodb+srv://nachiketpensalwar:${MongoPass}@mymongo.mgg14we.mongodb.net/MyTube`); // connecting the mongo db
mongoose.pluralize(null); // as mongodb adds a s in the ends that.

const db = mongoose.connection //connection variable

db.on('error', (error) => console.error(error)) //
db.once('open', () => console.log('Connected to db'))// one time check

const userDataSchema = new mongoose.Schema({ // user data schema 
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})


app.get('/userlogindata', async (req, res) => { // get api for userdata
  try {
    const userData = mongoose.model("userlogindata", userDataSchema);
    const data = await userData.find()
    res.json(data)
  } catch {
    res.status(500).json({ message: err.message })
  }
})

app.post('/insert/userlogindata', async (req, res) => {
  const Data = mongoose.model("userlogindata", userDataSchema);
  const data = new Data({
  "email": req.body.email,
  "name": req.body.name,
  "password": req.body.password,
  })  
  
  //console.log(data)
  try {
    const val = await data.save();
    res.json(val)
  } catch(error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})
const PORT = process.env.PORT; //mongodb pass in .env
app.listen(PORT, () => {
  console.log('Server Started')
})

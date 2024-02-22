const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require("cors");
const { BSON } = require('mongodb');
require('dotenv').config()


app.use(express.json())
app.use(cors())

const MongoPass = process.env.MONGO_PASSWORD; //mongodb pass in .env
mongoose.connect(`mongodb+srv://nachiketpensalwar:${MongoPass}@mymongo.mgg14we.mongodb.net/MyTube`); // connecting the mongo db
mongoose.pluralize(null); // as mongodb adds a s in the ends that.

const db = mongoose.connection //connection variable

db.on('error', (error) => console.error(error)) //
db.once('open', () => console.log('Connected to db'))// one time check

const userDataSchema = new mongoose.Schema({ // user data schema 
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})


app.get('/userlogindata', async (req, res) => { // get api for userdata
  console.log(req.params.id);
  try {
    const userData = mongoose.model("userlogindata", userDataSchema);
    const data = await userData.find()
    // data.forEach((element,index) => {
    //   console.log(element)
    //   console.log(index)
    // })
    res.json(data)
  } catch {
    res.status(500).json({ message: err.message })
  }
})

const PORT = process.env.PORT; //mongodb pass in .env
app.listen(PORT, () => {
  console.log('Server Started')
})

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require("cors");
const { BSON } = require('mongodb');
const multer = require("multer");

// const methodOverride = require("method-override")

let gfs;
require('dotenv').config()

app.use(express.json())
app.use(cors())

//MONGO AND ROUTES
const MongoPass = process.env.MONGO_PASSWORD; //mongodb pass in .env
mongoose.connect(`mongodb+srv://nachiketpensalwar:${MongoPass}@mymongo.mgg14we.mongodb.net/MyTube`); // connecting the mongo db
mongoose.pluralize(null); // as mongodb adds a s in the ends that.

const db = mongoose.connection //connection variable

db.on('error', (error) => console.error(error)) //
db.once('open', () => {
  // gfs = Grid(db.db, mongoose.mongo);
  // gfs.collection('uploads');
  console.log('Connected to db')
})// one time check

// var storage = new GridFsStorage({
//   url: `mongodb+srv://nachiketpensalwar:${MongoPass}@mymongo.mgg14we.mongodb.net/MyTube`,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });



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

const fileSchema = new mongoose.Schema({
  filename: String,
  data: Buffer
});


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


 /*//multer local store
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})*/


//multer buffer store
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
const File = mongoose.model('VideoFile', fileSchema);


app.post('/upload-video/:userName', upload.single("video"), async (req, res) => {
  try {
    let ID = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
    const fileData = {
      ID: ID,
      filename: `${req.file.originalname+'-'+ID}`,
      data: req.file.buffer
    };
    // Create a new document in MongoDB
    await File.create(fileData);
    
    res.status(200).send('File uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

app.get('/video-data/:userName/:videoId', async (req, res) => {
  try {
    const _id = req.params.videoId;
    const file = await File.findById(_id);

    if (!file) {
      return res.status(404).send('File not found');
    }

    res.set('Content-Type', 'video/mp4'); // Set content type as MP4
    res.send(file.data); // Send file data as response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})
const PORT = process.env.PORT; //mongodb pass in .env
app.listen(PORT, () => {
  console.log('Server Started')
})

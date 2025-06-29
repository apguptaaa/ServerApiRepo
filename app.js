const express = require('express')
const app = express()
const port =5000
const dbconnect = require('./db/dbconnect')
const web = require('./routes/web')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload'); // ✅ Yeh line add karo
//env configure
// const cloudinary = require('cloudinary');
const dotenv = require('dotenv')
dotenv.config({})

const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({ 
  cloud_name: 'dsprbnpqo', 
  api_key: '129264287522167', 
  api_secret: 'r_W_mc5cI544aSDc_mq7ucukfss' // Click 'View API Keys' above to copy your API secret
});



// const PORT = process.env.PORT || 5000

// app.use(cors({
//     origin: 'http://localhost:5173', // React app URL
//    // Allow cookies to be sent
// }))

// CORS
app.use(cors({
  origin: 'https://iridescent-vacherin-d960fa.netlify.app/',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json())
app.use(cookieparser());
app.use(express.urlencoded({ extended: true })); // handles urlencoded form data
app.use(fileUpload({
  useTempFiles: true
}));
//mongodb connection
dbconnect()

//localhost server
app.use('/api',web)
app.listen(port,()=>{
    console.log("server start localhost:5000")
})
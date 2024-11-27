import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import multer from 'multer'

dotenv.config()

import userRouter from './routers/users.route.js'
import categoryRouter from './routers/category.route.js'
import productRouter from './routers/product.route.js'
import routerUpload from './routers/upload.route.js'
import { errorHandler } from './middleware/error.js'
import routerOrder from './routers/order.route.js'
// import { upload } from './middleware/upload.js'
import { initializeFirebase } from './firebase.js'


// const upload = multer({ dest: 'uploads/' });
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAPjCNVjjek6n1nvjEgNzx0s-fSYvDS9v4",
//   authDomain: "findu-ea407.firebaseapp.com",
//   projectId: "findu-ea407",
//   storageBucket: "findu-ea407.appspot.com",
//   messagingSenderId: "529860671893",
//   appId: "1:529860671893:web:e6bc65cd1233891dfd9e9c",
//   measurementId: "G-S2S98HNKSG"
// };


// Khởi tạo Firebase app
// const firebaseApp = initializeApp(firebaseConfig);

// Khởi tạo Firestore
// const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);

// Khởi tạo Express app
const app = express();

// const app = express()
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()
initializeFirebase()

const port = process.env.PORT || 3000


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

// app.get('/user/:id', (req, res) => {
//   res.status(200).json(req.params);
// });

app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/order', routerOrder);
app.use('/upload',
  //  upload.single('file'),
  routerUpload);
// app.post('/upload', (req, res) => {
//   res.send('Upload Success');
// });

app.use(express.static('./public'));// set public folder for upload by

app.get('/', (req, res) => res.send('/index.html'));




app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


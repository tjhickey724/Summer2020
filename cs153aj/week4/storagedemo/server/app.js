const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');

const mongoose = require('mongoose')
mongoose.connect( 'mongodb://localhost/reactnativedemo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!!!")
});

const UserInfo = require('./models/UserInfo')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  const data = UserInfo.find()
  res.json({title:"db server for react native demo", n:data.length})
})

app.get('/form',(req,res) => res.render('form'))

app.post('/get',
  async (req,res,next) => {
    try {
      const deviceId = req.body.deviceId
      const key = req.body.key
      const userInfo = await UserInfo.findOne({key:key,deviceId:deviceId})
      console.log(`returning value=${userInfo && userInfo.value}`)
      console.dir(userInfo._doc)
      if (userInfo) {
        res.json(userInfo.value)
      } else {
        res.json("null")
      }
    }
    catch(e){
      res.json("null")
    }
  }
)

app.post('/store',
  async (req,res,next) => {
    try {
      const deviceId = req.body.deviceId
      const key = req.body.key
      const value = req.body.value
      let userInfo = await UserInfo.findOne({key:key,deviceId:deviceId})
      if (userInfo) {
        userInfo.value = value
        userInfo.lastUpdate = new Date()
        await userInfo.save()
        console.log("updated userinfo")
        console.dir(userInfo._doc)
      } else {
        const now = new Date()
        userInfo  =
          new UserInfo(
              {
                  key:key,
                  deviceId:deviceId,
                  value:value,
                  createdAt: now,
                  lastUpdate: now,
              })
        await userInfo.save()
        console.log("created new userinfo")
        console.dir(userInfo._doc)
      }
      res.json(req.body.value)
    }
    catch(e){
      next(e)
    }
  }
)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

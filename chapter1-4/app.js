require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const mongoose = require('mongoose')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// connect to mongodb
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB, () => {
  console.log('Connection has been made')
})
  .catch((e) => {
    console.error('App starting error:', e.stack)
    process.exit(1)
  })

const fs = require('node:fs')

// include controllers
fs.readdirSync('controllers').forEach((f) => {
  if (f.substr(-3) == '.js') {
    const route = require('./controllers/' + f)
    route.controller(app)
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log('listening on 3000'))

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var karyawanRouter = require('./routes/karyawan');

var app = express();
// const port = 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/karyawan', karyawanRouter);

module.exports = app;

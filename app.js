var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')

var index = require('./routes/index')
var trucs = require('./routes/trucs')

var app = express()

// Good app => good website
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')
app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(logger('dev'))
app.use('/public', express.static('public'))

var port = process.env.PORT || 5000

// Routes baby, routes
app.use('/', index)
app.use('/trucs', trucs)

// catch 404
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'text/html')
  res.render('404')
})

app.listen(port, function () {
  console.log('Server listening on port ' + port + '.')
})

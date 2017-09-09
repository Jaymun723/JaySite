var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render('tListe', {title: 'Trucs', desc: 'Une liste de trucs plus ou moins utile...'})
})

router.get('/ez', function (req, res) {
  res.render('ez', {title: 'Ez', desc: 'Ez in all is simplicity....'})
})

router.get('/bot', function (req, res) {
  res.render('bot', {title: 'Tutoriel pour faire un bot discord.', desc: 'Un petit tutoriel pour faire facilement des bots discord en utilisant ContainScord !'})
})

module.exports = router

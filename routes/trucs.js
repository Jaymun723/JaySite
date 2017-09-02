var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render('tListe', {title: 'Trucs', desc: 'Une liste de trucs plus ou moins utile...'})
})

router.get('/ez', function (req, res) {
  res.render('ez', {title: 'Ez'})
})

module.exports = router

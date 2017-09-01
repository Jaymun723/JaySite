var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render('index', {title: 'Accueil', desc: '"Le meilleur site du monde" - Jaymun723'})
})

router.get('/404', function (req, res) {
  res.render('404')
})

module.exports = router

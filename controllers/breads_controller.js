const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

/*INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})*/
// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
    {
        breads: Bread
      }
      )
  // res.send(Bread)
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('404')
  }
})



  

//exporting by name
module.exports = breads





const path = require('path')
const express = require('express')
const router = express.Router();
router.get('/contactus',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname, '../', 'views' ,'contact.html'))
  })

  router.post('/contact', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/successful');
 
})

router.get('/successful',(req,res,next)=>{
res.send('<h3> Form submission successful </h3>')
})

  module.exports = router;
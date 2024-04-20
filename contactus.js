const path = require('path')

exports.contacts = (req,res,next)=>{
    
    res.sendFile(path.join(__dirname, '../', 'views' ,'contact.html'))
  }
  exports.postcontactus = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/successful');
 
}
exports.successful = (req,res,next)=>{
    res.send('<h3> Form submission successful </h3>')
    }
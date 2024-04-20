const path = require('path')

exports.addprod = (req,res,next)=>{
  
    res.sendFile(path.join(__dirname, '../', 'views' ,'add-product.html'))
    
}
exports.postaddprod = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
 
}
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop');
const contact = require('./routes/contact')
app.use('/admin',adminRouter)
app.use(shopRouter);
app.use(contact);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})

app.listen(3000)
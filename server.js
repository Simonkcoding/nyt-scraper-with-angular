const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./routes/api/articles');

app.use(bodyParser.json());
app.use('/api/articles',articles);
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
};

const db = require('./config/key').mongoURI;

mongoose.connect(db)
.then(()=>console.log('connected mongoDB'))
.catch(err=>console.log(err));

const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`server started at ${port}`));
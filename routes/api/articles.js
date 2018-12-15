const express = require('express');
const router = express.Router();
const Article = require('../../models/article')

router.get("/",(req,res)=>{
    Article.find().sort({date:-1})
    .then(article=>res.json(article))
    .catch(err=>console.log(err))
});

router.post('/add/',(req,res)=>{
    const newArticle = new Article({
        title:req.body.title,
        data:req.body.date,
        url:req.body.url
    })
    newArticle.save()
    .then(article=>res.json(article))
    .catch(err=>console.log(err))
});

router.get('/delete/:id',(req,res)=>{
    Article.findByIdAndDelete({_id:req.params.id},(err,article)=>{
        if (err) throw err
        else res.json('removed')
    })
});

module.exports = router;
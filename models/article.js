const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type:String,
        isRequired:true
    },
    date:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports = Article = mongoose.model('Article',ArticleSchema);
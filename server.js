const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./routes/api/articles');
var cors = require('cors');
var path = require("path");

app.use(bodyParser.json());
app.use(cors());
app.use('/api/articles', articles);

app.use(express.static(`${__dirname}/frontend/dist/frontend/`));
app.get('*', (req, res) => {
    res.sendFile(`./front-end/dist/frontend/index.html`); 
});
// app.use(express.static(path.join(__dirname, 'dist')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '../dist/frontend/index.html'));
// });

const db = require('./config/key').mongoURI;

mongoose.connect(db)
    .then(() => console.log('connected mongoDB'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at ${port}`));
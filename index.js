const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/api');

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Welcome master')
});

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('This server is ready to serve you my lord');

});

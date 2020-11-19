const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) =>{
    res.send(layout(' '));
})

app.listen(3000, () =>{
    console.log('app listening on 3000')
})
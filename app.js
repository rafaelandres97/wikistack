const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, User, Page } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}))

// (async()=> {
//     await User.sync
//     await Page.sync
// })()


app.get('/', (req, res) =>{
    res.send(layout(' '));
})

const PORT = 3000;


const init = async () => {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  }
  
  init();

// app.listen(3000, () =>{
//     console.log('app listening on 3000')
// })
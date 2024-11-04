const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, "public")));

app.get('/', (req, res)=>{
  res.render('index');
})

app.post('/gender', (req, res)=>{
  res.render('gender');
})

app.get('/views/maleMuscle.ejs', (req, res)=>{
  res.render('maleMuscle');
})

app.get('/views/femaleMuscle.ejs', (req, res)=>{
  res.render('femaleMuscle');
})

app.get('/views/maleWeight.ejs', (req, res)=>{
  res.render('maleWeight');
})

app.get('/views/femaleWeight.ejs', (req, res)=>{
  res.render('femaleWeight');
})

app.listen(3000);
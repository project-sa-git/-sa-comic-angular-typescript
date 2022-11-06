const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')

mongoose.connect(config.DB_URI)
.then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  }
)

const app = express()
const PORT = process.env.POST || '3001' // herokuでは左、ローカルでは3001ポート
app.listen(PORT, function() {
  console.log('express　らんにんぐ');
})

//　コールバック関数（manga-card-detailが呼ばれたら関数を返す）
app.get('/manga-card-detail', function(req,res) {
  res.json({
    'success': true,
    'message': 'manga-card-detailさくせす👍'
  })
})

app.get('/', function(req,res) {
  console.log('ルートさくせす👍');
})

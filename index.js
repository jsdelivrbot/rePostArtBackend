'use strict'
require('use-strict')
var express = require('express')
var app = express()
var Tesseract = require('tesseract.js')
var fs = require('fs');
var request = require('request')


//  let file = fs.createWriteStream(`artistname.jpg`)

//  let stream = request(`https://repostart.s3.amazonaws.com/%2Fartistname.jpg`).pipe(file)
//     stream.on('finish', function() {
//       Tesseract.recognize('artistname.jpg')
//       .then(function(result){
//       console.log(result.text)
// })

//     })


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/image', function(req, res) {

 var file = fs.createWriteStream(`artistname.jpg`)

 var stream = request(`https://repostart.s3.amazonaws.com/%2Fartistname.jpg`).pipe(file)
    stream.on('finish', function() {
      Tesseract.recognize('artistname.jpg')
      .then(function(result){
      res.send(result.text)
})

    })

})

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

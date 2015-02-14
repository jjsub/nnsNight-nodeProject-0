var express = require('express'),
    app     = express();

var test = "";

for(var k = 0; k < 100; k++){
 // test = ""; We don't to reset de value
  if (k % 3 === 0){
    test += "<h1>"+"fizz"+"</h1>";
  }
  if (k % 5 === 0){
    test += "buzz";
  }
}

app.get('/', function (req, res) {
  res.send(test)
})

app.get('/bio', function (req, res) {
  res.send("This is my bio")
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
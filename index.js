var express = require('express')
var app = express()
var Sequelize = require('sequelize');
var sequelize = new Sequelize('pepe', 'wordpress', 'wordpress', {host: 'db'});

sequelize.sync().then(function(){
  console.log('DB connection sucessful.');
}, function(err){
  // catch error here
  console.log(err);

});

var Test = sequelize.define('test', {
  one: Sequelize.STRING,
  two: Sequelize.STRING
});

sequelize.sync().then(function() {
  return Test.create({
    one: 'one',
    two: 'three'
  });
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/mysql', function (req, res) {
  Test.findAll().then(function(results) {
  	res.send(results);
  })
})

app.listen(2050, function () {
  console.log('Example app listening on port 2050!')
})
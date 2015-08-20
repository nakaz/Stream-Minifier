var Stream = require ('stream');
var stream = new Stream;
var fs = require('fs');

var source = fs.createReadStream('./css/foundation.css', 'utf8');
var product = fs.createWriteStream('./dump.css', 'utf8');

var Readable = require('stream').Readable;
var Transform = require('stream').Transform;

source.setEncoding('utf8');


var string = '';

source.pipe(product);

source.on('data', function (){
  console.log('received data');
});

product.on('pipe', function (){
  console.log('initiating pipe');
});

product.on('unpipe', function (){
  console.log('finished pipe');
});

// process.stdin.on('data', function (chunk){
//   string += chunk;
//   string = string.replace(/\s/g, "");
//   string = string.replace(/(\/\*).*(\*\/)/g, "");
//   product.write(string);
// });
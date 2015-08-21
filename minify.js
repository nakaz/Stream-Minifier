var stream = require ('stream');
var fs = require('fs');

var minified = fs.createWriteStream('./dump.css', 'utf8');

var Transform = stream.Transform;

var minifyCSS = new Transform();

var string = '';

minifyCSS._transform = function (chunk, encoding, done){
  string += chunk;
  string = string.replace(/\s/g, "").replace(/(\/\*)([\s\S]*?)(\*\/)/g, "");
  minified.write(string, 'utf8');
};

process.stdin
  .pipe(minifyCSS)
  .pipe(process.stdout);

process.stdout.on('error', process.exit);
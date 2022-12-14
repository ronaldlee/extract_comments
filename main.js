var string = `
/**
 * A javascript multiline-comment
 * with multiple lines
 */
function aLineOfCode () {
}

// A single line comments
// More of it directly below
function anotherFunction () {
  aLineOfCode()
}

anotherFunction()
`
//var comments = require('multilang-extract-comments')(string)
//console.log(comments)


//const testFolder = './datasets/spark';
//const testFolder = './datasets/finagle';
const testFolder = './datasets/kafka';
const fs = require('fs');

const options = {
  pattern: {
    name: 'Scala',
    nameMatchers: ['.scala'],
    singleLineComment: [{ start: '//' }],
    multiLineComment: [{ start: '/*', middle: '', end: '*/'}]
  }
}

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    const filepath = testFolder + '/' + file  
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        var comments = require('multilang-extract-comments')(data)
        //var comments = require('multilang-extract-comments')(data, options)
        //var comments = require('multilang-extract-comments')(data, { filename: 'scala.scala'})

        const obj = {filename:filepath, data: comments}

        //const obj_str = JSON.stringify(obj); 
        //console.log(obj_str)
        console.log(obj)
    });  
  });
});


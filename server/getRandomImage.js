var fs = require('fs')
var directory = require('../config.json').directory

module.exports = function(path){
  try{
    var rawFiles = fs.readdirSync(directory + path)
  }
  catch(e) {
    //if directory doesn't exist
    return false
  }

  //filter and remove stupid .dot files
  var files = []
  rawFiles.map(file => {
    if(file.charAt(0) != '.') files.push(file)
  })

  var max = files.length
  var index = Math.floor(Math.random() * max);

  return directory + path + '/' + files[index]
}

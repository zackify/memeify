var fs = require('fs')
var config = process.cwd() + '/config.json'
var directory = require(config).directory

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

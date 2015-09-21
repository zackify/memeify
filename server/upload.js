var config = process.cwd() + '/config.json'
var Token = require(config).userToken
var exec = require('child_process').exec;

module.exports = function upload(text, channel, image){
  var top = text.toUpperCase().split(',')[0] || ''
  var bottom = text.toUpperCase().split(',')[1]

  if(bottom) var command = 'caption '+image+' -o output.jpg --top-caption "'+top+'" --bottom-caption "'+bottom+'"'
  else var command = 'caption '+image+' -o output.jpg --c "'+text.toUpperCase()+'"'

  console.log('making it...', arguments[2])
  exec(command, function(){
    console.log('made it', arguments[1])

    exec('curl -F file=@output.jpg -F channels='+channel+' -F title="'+text+'" -F token='+Token+' https://slack.com/api/files.upload')
  })
}

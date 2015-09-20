var getRandomImage = require('./getRandomImage')
var upload = require('./upload')

module.exports = function handleMessage(message){
  var channel = slack.getChannelGroupOrDMByID(message.channel)

  if(message && message.text && message.type == 'message' && message.user){
    var text = message.text
    if(text.match(/\w+ify/i)){
      var folder = text.match(/\w+ify/i)[0]
      var text = message.text.replace(/\w+ify/i, '')
      var image = getRandomImage(folder)
      if(image) upload(text, message.channel, image)
    }

  }
}

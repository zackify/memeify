var Slack = require('slack-client')
var Token = require('../config.json').botToken
var HandleMessage = require('./handleMessage')

slack = new Slack(Token, true, true)
slack.on('message', HandleMessage)
slack.on('open', () => {
  console.log('Connected and waiting!')
})
slack.login()

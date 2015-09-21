#! /usr/bin/env node
var Slack = require('slack-client')
var config = process.cwd() + '/config.json'
try{
  require(config)
}
catch(e){
  return console.error('Please make a config.json file in your current directory.')
}
var Token = require(config).botToken

var HandleMessage = require('./handleMessage')

slack = new Slack(Token, true, true)
slack.on('message', HandleMessage)
slack.on('open', () => {
  console.log('Connected and waiting!')
})
slack.login()

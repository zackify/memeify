##Slackify

Slackify is a bot that will automatically generate memes when a user types `zackify this is, so cool`. The bot will look for a folder called `zackify` inside of your memes directory and then grab a random picture from that folder. You can have a single image inside the folder, or 100, it will randomly select one and create the meme.

##Setup

Install caption and [set it up](https://github.com/jesseditson/node-caption)

`npm install caption -g`

Rename config.json.example to config.json and fill in your info:

```
{
  "botToken": "slack bot token",
  "userToken": "slack user token",
  "directory": "./memes/" //directory to your memes
}


```
The reason for generating a user token is because bot users are not aloud to upload files to slack.

The way I use this is I put the meme's folder on Dropbox and let everyone have access to it.

##Running

git clone this repo, then `npm install` and `npm start`. Now go into a public channel or message the bot and say `zackify hi` if you have a folder called `zackify` in your memes folder with pictures!

You can put text on the top and bottom of a meme by adding a comma: `zackify this is on top, this is on bottom`

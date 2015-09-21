##Memeify

Memeify is a bot that will automatically generate memes when a user types `zackify this is, so cool`. The bot will look for a folder called `zackify` inside of your memes directory and then grab a random picture from that folder. You can have a single image inside the folder, or 100, it will randomly select one and create the meme.

##Setup

Install caption and [set it up](https://github.com/jesseditson/node-caption)

```
npm install caption -g
npm install memeify -g
memeify // will start the bot!
```

Make a config.json file that will have the following info:

```
{
  "botToken": "slack bot token",
  "userToken": "slack user token",
  "directory": "./memes/" //directory to your memes, with trailing slash
}


```
Put this in the directory that you'll be running `memeify` from. All you need to do is run `memeify` in a terminal window, it'll look for the config in the current directory and start listening!

The reason for generating a user token is because bot users are not allowed to upload files to slack.

The way I use this is I put the meme's folder on Dropbox and let everyone have access to it.

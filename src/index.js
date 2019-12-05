'use strict';

require('dotenv').config();
const http = require('http');
const httpServer = require('./module/http_server');
const packageInfo = require('../package.json');
const PORT = parseFloat(process.env.PORT);
const HOST = process.env.HOST.toString();
const { RTMClient } = require('@slack/client');
const create = require('./module/create');
const invite = require('./module/invite');
const kick = require('./module/kick');
const rename = require('./module/rename');
const ICON = process.env.EMOJI.toString();
const ICON_KICK = process.env.EMOJI_KICK.toString();
const ICON_RENAME = process.env.EMOJI_rename.toString();
// const SLACK_USER_TOKEN = process.env.SLACK_USER_TOKEN.toString();
const ICON_INVITE = process.env.EMOJI_INVITE.toString();
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN.toString();
const rtmClient = new RTMClient(SLACK_BOT_TOKEN);
// const webClient = new WebClient(SLACK_USER_TOKEN);
// const webClientBot = new WebClient(SLACK_BOT_TOKEN);

rtmClient.on('message', async (event) => {
  console.log(event);
  const emoji = event.text.split(/create/i)[0].toString().trim();
  const emojiKick = event.text.trim().split(/kick/i)[0].toString().trim();
  const emojiRename = event.text.trim().split(/rename/i)[0].toString().trim();
  const emojiInvite = event.text.split(/invite/i)[0].toString().trim();
  if (emoji === ICON) {
    console.log('create');
    const channelName = event.text.trim().split(/create/i)[1];
    await create(channelName);
  }
  if (emojiInvite === ICON_INVITE) {
    console.log('invite');
    const inviteUser = event.text.split(/<@|>/i)[1].toString().trim();
    await invite(event.channel, inviteUser);
  }
  if (emojiKick === ICON_KICK) {
    console.log('kick');
    const kickName = event.text.split(/<@|>/i)[1].toString().trim();
    await kick(event.channel, kickName);
  }
  if (emojiRename === ICON_RENAME) {
    console.log('rename');
    const nameRename = event.text.trim().split(/rename/i)[1].toString().trim();
    await rename(event.channel, nameRename);
  }
  console.log('finish');
});

rtmClient.start();

http.createServer((req, res) => {
  httpServer(req, res, packageInfo.name);
}).listen(PORT, HOST, () => {
  console.log(`listening to http:${HOST}:${PORT}`);
});

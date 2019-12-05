'use strict';

const { WebClient } = require('@slack/client');
const SLACK_USER_TOKEN = process.env.SLACK_USER_TOKEN.toString();
const webClient = new WebClient(SLACK_USER_TOKEN);
const kick = (channelName, user) => {
  webClient.channels.kick({
    channel: channelName,
    user: user
  });
};

module.exports = kick;

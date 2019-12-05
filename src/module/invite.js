'use strict';
const { WebClient } = require('@slack/client');
const SLACK_USER_TOKEN = process.env.SLACK_USER_TOKEN.toString();
const webClient = new WebClient(SLACK_USER_TOKEN);

const invite = (channel, user) => {
  webClient.channels.invite({
    channel: channel,
    user: user
  });
};
module.exports = invite;

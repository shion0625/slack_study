'use strict';
const { WebClient } = require('@slack/client');
const SLACK_USER_TOKEN = process.env.SLACK_USER_TOKEN.toString().trim();
const webClient = new WebClient(SLACK_USER_TOKEN);
const rename = (ch, na) => {
  webClient.channels.rename({
    channel: ch,
    name: na
  });
};
module.exports = rename;

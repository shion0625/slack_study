'use strict';

const { WebClient } = require('@slack/client');
const SLACK_USER_TOKEN = process.env.SLACK_USER_TOKEN.toString();
const webClient = new WebClient(SLACK_USER_TOKEN);
const create = (name) => {
  webClient.channels.create({
    name: name
  });
};

module.exports = create;

'use strict';

const main = (req, res, systemName) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain:charset = utf-8:'
  });
  res.write(systemName);
  res.end();
};

module.exports = main;

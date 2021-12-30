const express = require('express');
const fs = require('fs');
const { resolve } = require('path');
const server = express();

const { createRenderer } = require('vue-server-renderer');
const { default: createApp } = require('../dist/server.bundle.js');

server.use(express.static(resolve('../dist'), { index: false }));

server.get('*', async (req, res) => {
  try {
    const app = createApp();
    const render = createRenderer({
      template: fs.readFileSync('./server/index.ssr.html', 'utf-8'),
    });

    const html = await render.renderToString(app);
    res.send(html);
  } catch (error) {
    console.log(error);
  }
});

server.listen(12306, () => {
  console.log('running at 12306');
});

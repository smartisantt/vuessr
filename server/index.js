const express = require('express');
const fs = require('fs');
const { resolve } = require('path');
const server = express();
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

server.use(express.static(resolve(__dirname, '../dist'), { index: false }));

server.get('*', async (req, res) => {
  const url = req.url;

  try {
    const render = createBundleRenderer(serverBundle, {
      template: fs.readFileSync('./server/index.ssr.html', 'utf-8'),
      clientManifest,
    });

    const html = await render.renderToString({ url });
    res.send(html);
  } catch (error) {
    console.log(error);
    if ((error.code = 404)) {
      res.status(404).send('页面去火星了，');
    }
    res.status(500).send('服务器错误');
  }
});

server.listen(12306, () => {
  console.log('running at 12306');
});

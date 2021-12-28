const express = require('express');
const fs = require('fs');
const server = express();
const Vue = require('vue');

const template = fs.readFileSync('./index.html', 'utf-8');
const render = require('vue-server-renderer').createRenderer({ template });

const context = {
  title: 'vue ssr',
  meta: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `,
};

server.get('*', async (req, res) => {
  const app = new Vue({
    data() {
      return {
        msg: 'hello SSR',
      };
    },
    template: '<div>{{msg}}</div>',
  });

  const html = await render.renderToString(app, context);
  res.send(html);
});

server.listen(12306, () => {
  console.log('server is running at 12306');
});

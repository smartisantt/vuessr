import { response } from 'express';
import createApp from '../main';

export default function (ctx) {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(ctx.url);
    router.onReady(() => {
      // 判断当前路由下是否存在组件
      const mathedComponents = router.getMatchedComponents();
      if (mathedComponents.length == 0) {
        return reject({ code: 404 });
      }
      resolve(app);
    }, reject);
  });
}

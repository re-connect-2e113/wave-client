// TODO: 大きくなってきたら型定義使うためにServiceWorker関係は別リポジトリへ
// (tsconfigのdomとwebworkerは共存できない)
self.addEventListener('push', e => {
  const event: any = e;
  if (event.data === null) {
    return;
  }
  const data = event.data.json();
  const title = data.title;
  const body = {
    body: data.body,
    icon: data.icon
  };
  const s: any = self;
  s.clients.matchAll().then((clients: any) => {
    clients.forEach((client: any) =>
      client.postMessage({ title, icon: body.icon, body: data.body })
    );
  });
});

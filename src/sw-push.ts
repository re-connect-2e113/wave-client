self.addEventListener('push', event => {
  const serviceWorkerEvent: any = event;
  const data = serviceWorkerEvent.data.json();
  const title = data.title;
  const body = {
    body: data.body,
    icon: data.icon
  };
  const worker: any = self;
  serviceWorkerEvent.waitUntil(
    worker.registration.showNotification(title, body)
  );
});

function encodeBase64URL(buffer: ArrayBuffer) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// XXX: Chrome 50以降、Firefox 48以降を想定
function getContentEncoding(): string {
  // supportedContentEncodingsをサポートしていないブラウザ(Chrome60未満など)はaesgcm固定
  if (!('supportedContentEncodings' in PushManager)) {
    return 'aesgcm';
  }
  // TODO: PushManger#supportedContentEncodingsがある型定義ファイルを使う
  return (PushManager as any).supportedContentEncodings.includes('aes128gcm')
    ? 'aes128gcm'
    : 'aesgcm';
}

export default function subscribePush() {
  navigator.serviceWorker.ready.then(registration => {
    if (!registration.pushManager) {
      // Push通知に対応していない
      return;
    }
    return registration.pushManager
      .subscribe({
        // 以下のようなエラーがfalseだと出る。つまり今はフォアグラウンドでも通知出しまくるしか無いのかな
        // Chrome currently only supports the Push API for subscriptions that will result in user-visible messages
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.REACT_APP_VAPID_PUBLIC_KEY!
        )
      })
      .then(subscription => {
        const endpoint = subscription.endpoint;
        // ECDHで使用するクライアント側の公開鍵
        const publicKey = encodeBase64URL(subscription.getKey('p256dh')!);
        const authSecret = encodeBase64URL(subscription.getKey('auth')!);

        // プッシュ通知の送信時に指定するContent-Encoding
        const contentEncoding = getContentEncoding();
        fetch(`${process.env.REACT_APP_WAVE_SERVER_URL}/push/register`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            endpoint,
            authSecret,
            contentEncoding,
            publicKey
          }),
          headers: new Headers({
            'Content-type': 'application/json'
          })
        });
      });
  });
}

export const registerPush = () => {
  Notification.requestPermission().then(result => {
    switch (result) {
      case 'granted':
        subscribePush();
        break;
      case 'denied':
        // TODO: 拒否されたときの処理
        break;
      default:
        break;
    }
  });
};

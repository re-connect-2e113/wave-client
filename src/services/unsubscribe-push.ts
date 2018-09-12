/**
 * 通知の受け取り解除する
 */
export default function unsubscribePush() {
  navigator.serviceWorker.ready.then(registration => {
    registration.pushManager
      .getSubscription()
      .then(subscription => {
        if (!subscription) {
          // 既に通知の受け取りが解除されている場合
          return;
        }
        subscription
          // クライアントで解除処理をしてからサーバーで通知購読情報削除処理
          .unsubscribe()
          .then(() =>
            // TODO: 通知購読情報をDBで管理しここではIDを渡して削除するようにする
            fetch(`${process.env.REACT_APP_WAVE_SERVER_URL}/push/unsubscribe`, {
              method: 'DELETE',
              mode: 'cors'
            })
          )
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  });
}

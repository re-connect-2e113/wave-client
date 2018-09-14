import * as React from 'react';
import MessageLog from './components/MessageLog';
import MessengerHeader from './components/MessengerHeader';
import MessageInput from './components/MessageInput';
import { Dispatch, bindActionCreators } from 'redux';
import { ISendMessageAction } from './actions/mesages';
import { connect } from 'react-redux';
// tslint:disable-next-line:no-duplicate-imports
import * as MessageActions from './actions/mesages';
import { registerPush } from './services/subscribe-push';
import * as styles from './Wave.css';
import SWMessageEventListener from './SWMessageEventListener';

interface IWaveProps {
  sendMessage: (text: string) => ISendMessageAction;
  addRecievedMessage: (
    sender: string,
    text: string
  ) => MessageActions.IAddMessageAction;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      sendMessage: MessageActions.sendMessage,
      addRecievedMessage: MessageActions.addMessage
    },
    dispatch
  );

const wave: React.StatelessComponent<
  IWaveProps & { className?: string }
> = props => {
  const pushNoticeHandler = (message: ServiceWorkerMessageEvent) => {
    navigator.serviceWorker.ready.then(registration => {
      // XXX: 本当はフォアグラウンドにいる時は通知を出したくない
      // PushManager#subscribe()でuserVisibleOnly: trueにしか出来ないことに関連
      // 表示されている時はWebSocket使うとかしてみるのもありかも
      // if (document.hidden) {
      //   registration.showNotification(message.data.title, {
      //     icon: message.data.icon,
      //     body: message.data.body
      //   });
      // }
      registration.showNotification(message.data.title, {
        icon: message.data.icon,
        body: message.data.body
      });
    });
    props.addRecievedMessage(
      process.env.REACT_APP_PRECIOUS_NAME!,
      message.data.body
    );
  };

  return (
    <div className={styles.wave}>
      {/* TODO: ポップアップとかでPush通知していいかどうか聞くようにする。とりあえずトリガーだけ置いておく */}
      <button onClick={registerPush} style={{ color: '#fff' }}>
        登録
      </button>
      {/* TODO: 連絡先一覧やPushメッセージから渡すようにする */}
      <MessengerHeader
        name={process.env.REACT_APP_PRECIOUS_NAME!}
        isOnline={true}
      />
      <MessageLog />
      <MessageInput sendMessage={props.sendMessage} />
      <SWMessageEventListener listeners={[pushNoticeHandler]} />
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(wave);

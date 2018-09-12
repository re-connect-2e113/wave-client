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

interface IWaveProps {
  sendMessage: (text: string) => ISendMessageAction;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      sendMessage: MessageActions.sendMessage
    },
    dispatch
  );

const wave: React.StatelessComponent<
  IWaveProps & { className?: string }
> = props => {
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
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(wave);

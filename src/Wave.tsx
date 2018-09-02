import * as React from 'react';
import MessageLog from './components/MessageLog';
import MessengerHeader from './components/MessengerHeader';
import MessageInput from './components/MessageInput';
import { Dispatch, bindActionCreators } from 'redux';
import { ISendMessageAction } from './actions/mesages';
import { connect } from 'react-redux';
// tslint:disable-next-line:no-duplicate-imports
import * as MessageActions from './actions/mesages';

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
    <div>
      <MessengerHeader />
      <MessageLog />
      <MessageInput sendMessage={props.sendMessage} />
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(wave);

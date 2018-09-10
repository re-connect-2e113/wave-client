import * as React from 'react';
import { ISendMessageAction } from '../actions/mesages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import * as styles from './MessageInput.css';
import classNameProps from '../class-name-props';
import utils from '../utils';

interface IMessageInputProps {
  sendMessage: (text: string) => ISendMessageAction;
}

interface IMessageInputState {
  message: string;
}

export default class MessageInput extends React.Component<
  IMessageInputProps & classNameProps,
  IMessageInputState
> {
  constructor(props: IMessageInputProps) {
    super(props);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
  public readonly state = {
    message: ''
  };
  public render() {
    const classes = `${utils.toStringOrEmpty(this.props.className)} ${
      styles.root
    }`;
    return (
      <div className={classes}>
        <div className={styles.inputBoxWrapper}>
          {/* FIXME: どういう表現が適切なのだろう。オリジナルはSELECT YOUR MIND. 英語が得意な人教えてください */}
          <input
            placeholder="ENTER YOUR MIND."
            className={styles.inputBox}
            type="text"
            value={this.state.message}
            onChange={this.onChangeMessage}
          />
        </div>
        <div className={styles.sendButtonWrapper}>
          <button className={styles.sendButton} onClick={this.onSubmitMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    );
  }
  private onChangeMessage(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ message: e.currentTarget.value });
  }
  private onSubmitMessage(e: React.FormEvent<HTMLButtonElement>) {
    if (this.state.message === '') {
      return;
    }
    this.props.sendMessage(this.state.message);
    this.setState({ message: '' });
  }
}

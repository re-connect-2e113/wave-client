import * as React from 'react';
import HerIcon from './HerIcon';
import Balloon from './Balloon';
// TODO: サーバーに置いておく(今は(名前を)サーバー、(アイコンを)クライアントという形でわかれてしまっている)
import tempIconPng from '../assets/temp-icon.png';
import * as styles from './HerMessage.css';

interface IHerMessageProps {
  message: string;
  senderName: string;
}

const herMessage: React.StatelessComponent<IHerMessageProps> = props => {
  return (
    <div className={styles.root}>
      <HerIcon image={tempIconPng} />
      <div>
        <p className={styles.herMessageActionLog}>
          {props.senderName} WROTE...
        </p>
        <Balloon fromLeft={true} message={props.message} />
      </div>
    </div>
  );
};

export default herMessage;

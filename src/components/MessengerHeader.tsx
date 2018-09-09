import * as React from 'react';
import * as styles from './MessengerHeader.css';
import classNameProps from '../class-name-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import WaveIcon from './WaveIcon';

interface IHeaderProps {
  isOnline: boolean;
  name: string;
}

const messengerHeader: React.StatelessComponent<
  IHeaderProps & classNameProps
> = props => {
  const { isOnline, name, className } = props;
  // TODO: propsで渡されたクラス名と持っているルートのクラス名を合成する処理まとめる
  const classes = className ? `${className}` : styles.root;
  return (
    <div className={classes}>
      <button className={styles.headerHomeButton}>
        <WaveIcon className={styles.homeButtonWaveIcon} />
      </button>
      <div className={styles.headerFriendInfo}>
        <p className={styles.statusDisplayFriendName}>{name}</p>
        <div className={styles.headerStatusDisplay}>
          <FontAwesomeIcon
            className={
              isOnline
                ? styles.headerStatusIconOnline
                : styles.headerStatusIconOffline
            }
            icon={faCircle}
          />
          <p className={styles.statusDisplayDescription}>
            {isOnline ? 'ONLINE' : 'OFFLINE'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default messengerHeader;

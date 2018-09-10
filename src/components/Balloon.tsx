import * as React from 'react';
import * as styles from './Balloon.css';
import classNameProps from '../class-name-props';
import utils from '../utils';

interface IBalloonProps {
  // TODO: スタンプに対応したいけど、イラスト……
  message: string;
  /**
   * falseで右から生える
   */
  fromLeft: boolean;
}

const balloon: React.StatelessComponent<
  IBalloonProps & classNameProps
> = props => {
  const { message, fromLeft, className } = props;
  const classes = `${utils.toStringOrEmpty(className)} ${styles.balloon} ${
    fromLeft ? styles.balloonHers : styles.balloonYours
  }`;
  return (
    <div>
      <div className={classes}>
        <p className={styles.balloonMessage}>{message}</p>
      </div>
    </div>
  );
};

export default balloon;

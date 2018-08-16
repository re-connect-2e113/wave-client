import * as React from 'react';
import * as styles from './Balloon.css';
import classNameProps from '../class-name-props';

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
  const classes = `${className} ${styles.balloon} ${
    // FIXME: 文字列出しちゃったら型意味なくない？
    fromLeft ? styles['balloon--hers'] : styles['balloon--yours']
  }`;
  return (
    <div>
      <div className={classes}>
        {/* FIXME: 文字列出しちゃったら型意味なくない？ */}
        <p className={styles['balloon__message']}>{message}</p>
      </div>
    </div>
  );
};

export default balloon;

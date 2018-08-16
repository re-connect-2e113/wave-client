import * as React from 'react';
import * as styles from './Balloon.css';
import classNameProps from '../class-name-props';

interface IBalloonProps {
  // TODO: スタンプに対応したいけど、イラスト……
  message: string;
  isYourMessage: boolean;
}

const balloon: React.StatelessComponent<
  IBalloonProps & classNameProps
> = props => {
  const { message, isYourMessage, className } = props;
  const classes = `${className} ${styles.balloon} ${
    // FIXME: 文字列出しちゃったら型意味なくない？
    isYourMessage ? styles['balloon--yours'] : styles['balloon--hers']
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

import * as React from 'react';
import * as styles from './HerIcon.css';
import classNameProps from '../class-name-props';

interface IHerIconProps {
  image: string;
}

const herIcon: React.StatelessComponent<
  IHerIconProps & classNameProps
> = props => {
  // TODO: propsで渡されたクラス名と持っているルートのクラス名を合成する処理まとめる
  const classes = props.className ? `${props.className}` : '';
  return (
    <div className={classes}>
      <img className={styles.herIcon} src={props.image} alt="icon" />
    </div>
  );
};

export default herIcon;

import * as React from 'react';
import * as styles from './HerIcon.css';
import classNameProps from '../class-name-props';

interface IHerIconProps {
  image: string;
}

const herIcon: React.StatelessComponent<
  IHerIconProps & classNameProps
> = props => {
  return (
    <div>
      <img className={styles.herIcon} src={props.image} alt="icon" />
    </div>
  );
};

export default herIcon;

import * as React from 'react';
import HerIcon from './HerIcon';
import Balloon from './Balloon';

interface IHerMessageProps {
  message: string;
}

const herMessage: React.StatelessComponent<IHerMessageProps> = props => {
  return (
    <div>
      <HerIcon />
      <Balloon fromLeft={true} message={props.message} />
    </div>
  );
};

export default herMessage;

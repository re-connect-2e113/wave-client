import * as React from 'react';
import Balloon from './Balloon';

interface IYourMessageProps {
  message: string;
}

const yourMessage: React.StatelessComponent<IYourMessageProps> = props => {
  return (
    <div>
      <Balloon fromLeft={false} message={props.message} />
    </div>
  );
};

export default yourMessage;

import * as React from 'react';
import HerMessage from './HerMessage';
import YourMessage from './YourMessage';

const messageLog: React.StatelessComponent = () => {
  return (
    <div>
      <HerMessage />
      <YourMessage />
    </div>
  );
};

export default messageLog;

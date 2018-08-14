import * as React from 'react';
import HerIcon from './HerIcon';
import Balloon from './Balloon';

const herMessage: React.StatelessComponent = () => {
  return (
    <div>
      <HerIcon />
      <Balloon />
    </div>
  );
};

export default herMessage;

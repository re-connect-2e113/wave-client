import * as React from 'react';
import MessageLog from './components/MessageLog';
import MessengerHeader from './components/MessengerHeader';

const wave: React.StatelessComponent = () => {
  return (
    <div>
      <MessengerHeader />
      <MessageLog />
    </div>
  );
};

export default wave;

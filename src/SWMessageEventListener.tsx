import * as React from 'react';

interface ISWMessageEventListenerProps {
  listeners: ((message: ServiceWorkerMessageEvent) => void)[];
}

export default class SWMessageEventListener extends React.Component<
  ISWMessageEventListenerProps
> {
  componentDidMount() {
    this.props.listeners.forEach(listener =>
      navigator.serviceWorker.addEventListener('message', listener)
    );
  }
  componentWillUnmount() {
    this.props.listeners.forEach(listener =>
      navigator.serviceWorker.removeEventListener('message', listener)
    );
  }
  render() {
    return null;
  }
}

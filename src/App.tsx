import * as React from 'react';
import * as styles from './App.css';

import logoSvg from './logo.svg';

class App extends React.Component {
  public render() {
    console.log(styles);
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logoSvg} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

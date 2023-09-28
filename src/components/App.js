import React from 'react';
import styles from '../styles/appStyles.module.css';

const App = () => {


  return (
    <div id="main">
      <h1 className={styles.success}>Success</h1>
      <h1 id={styles.error}>Error</h1>
    </div>
  );
}

export default App;


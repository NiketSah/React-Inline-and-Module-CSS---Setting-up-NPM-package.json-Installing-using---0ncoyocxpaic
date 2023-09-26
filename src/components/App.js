import React from 'react';
import styles from '../styles/appStyles.module.css';

const App = () => {
  const headingStyle = {
    fontSize: '50px',
    color: 'red',
  };

  return (
    <div id="main">
      <h1 className={styles.success}>Success</h1>
      <h1 style={headingStyle}>Error</h1>
    </div>
  );
}

export default App;


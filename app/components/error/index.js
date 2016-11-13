import React from 'react';
import styles from './styles.sass';
import { Link } from 'react-router';

class ErrorComponent extends React.Component {
  render () {
    return <div className={styles.container}>
      <div className={styles.image} />
      The page you are looking for is currently in Siberia...<br />
      <Link to="/">Go to dashboard</Link>
    </div>
  }
}

export default ErrorComponent;
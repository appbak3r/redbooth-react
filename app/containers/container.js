import React from 'react';
import styles from './styles.sass';

class Container extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.object
};

export default Container;
import React from 'react';
import styles from './styles.sass';
import { RouteTransition } from 'react-router-transition';

class Container extends React.Component {
  render () {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.routeTransition}
        runOnMount={false}
      >
        <div className={styles.container}>
          {this.props.children}
        </div>
      </RouteTransition>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.object
};

export default Container;
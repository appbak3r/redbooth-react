import React from 'react';

class Container extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.object
};

export default Container;
import React from 'react';

class Hello extends React.Component {
  render () {
    const { name = 'World'} = this.props;
    return <h1>Hello, {name}!</h1>;
  }
}

Hello.propTypes = {
  name: React.PropTypes.string
};

export default Hello;

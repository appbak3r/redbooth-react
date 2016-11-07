import React from 'react';
import Hello from './components/hello';

class App extends React.Component {
  name = 'Redbooth';

  render () {
    return <Hello name={this.name} />;
  }
}

export default App;
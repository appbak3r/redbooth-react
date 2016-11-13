import React from 'react';
import styles from './styles.sass';

class TaskList extends React.Component {
  render () {
    const { name } = this.props;
    return <div className={styles.list}>{name}</div>
  }
}

TaskList.propTypes = {
  name: React.PropTypes.string
};

export default TaskList;
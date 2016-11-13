import React from 'react';
import styles from './styles.sass';
import { browserHistory } from 'react-router'

class BoardListCard extends React.Component {
  constructor () {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    const { id } = this.props;
    browserHistory.push(`/boards/${id}`)
  }

  render () {
    const { name } = this.props;
    return <div className={styles.card} onClick={this.onClick}>{name}</div>
  }
}

BoardListCard.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string
};

export default BoardListCard;
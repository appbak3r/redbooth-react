import React from 'react';
import BoardListCard from '../board-list-card';
import styles from './styles.sass';

class BoardList extends React.Component {
  render () {
    const { projects } = this.props;
    let template = projects.map((item)=> {
      return <BoardListCard name={item.name} id={item.id} key={item.id} />
    });
    return <div className={styles.container}>
      <div className={styles.title}>
        Your boards
      </div>
      <div className={styles.cardList}>
        {template}
      </div>
    </div>
  }
}

BoardList.propTypes = {
  projects: React.PropTypes.array
};

export default BoardList;
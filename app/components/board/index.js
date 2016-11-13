import React from 'react';
import styles from './styles.sass';
import TaskList from '../task-list';
import * as projectsActions from '../../actions/projectsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Board extends React.Component {
  componentDidMount () {
    const { id } = this.props.params;
    this.props.getTaskLists(id);
  }

  render () {
    const { params, projects, fetching, taskLists } = this.props;
    let template, list;
    const project = projects.find(item => item.id === +params.id);
    if (!fetching) {
      if (project) {
        const { name } = project;

        list = taskLists.sort((item, nextItem) => {
          return item.position > nextItem.position;
        }).map((item)=> {
          return <TaskList name={item.name} key={item.id} />
        });

        template = <div>
          <div className={styles.title}>{name}</div>
          <div className={styles.list}>
            {list}
          </div>
        </div>;
      }
    } else {
      template = <div className={styles.preloader}>
        Searching cardindex
        {(new Array(3).fill('')).map((_, idx) => <span className={styles.dot} key={idx}>.</span>)}
      </div>
    }

    return <div className={styles.container}>
      {template}
    </div>
  }
}

Board.propTypes = {
  taskLists: React.PropTypes.array,
  fetching: React.PropTypes.bool,
  getTaskLists: React.PropTypes.func
};

function mapStateToProps (state) {
  return { ...state.projects, ...state.taskLists };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...projectsActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)

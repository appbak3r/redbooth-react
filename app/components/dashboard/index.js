import React from 'react';
import { connect } from 'react-redux'
import BoardList from '../board-list';

class Dashboard extends React.Component {
  render () {
    const { projects } = this.props;
    return <BoardList projects={projects} />;
  }
}

Dashboard.propTypes = {
  projects: React.PropTypes.array,
};

function mapStateToProps (state) {
  return { ...state.projects };
}

export default connect(mapStateToProps)(Dashboard)

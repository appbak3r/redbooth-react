import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as oauthActions from '../../actions/oauthActions';
import * as apiActions from '../../actions/apiActions';

class Dashboard extends React.Component {

  constructor () {
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    this.props.getProfile();
  }

  onClick () {
    this.props.logout();
    this.props.router.replace('/login');
  }

  render () {
    return <div><a href="javascript: void(0);" onClick={this.onClick}>Logout</a></div>
  }
}

Dashboard.propTypes = {
  logout: React.PropTypes.func,
  getProfile: React.PropTypes.func
};

function mapStateToProps (state) {
  return state.oauth;
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...apiActions, ...oauthActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

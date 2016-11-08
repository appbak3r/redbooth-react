import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as oauthActions from '../../actions/oauthActions';
import * as profileActions from '../../actions/profileActions';
import Header from '../header';

const DEFAULT_PHOTO_URL = '/profile.png';

class Dashboard extends React.Component {

  constructor () {
    super();
    this.logout = this.logout.bind(this);
  }

  componentDidMount () {
    this.props.getProfile();
  }

  componentWillReceiveProps (nextProps) {
    const { accessToken, getProfile } = this.props;
    if (accessToken !== nextProps.accessToken) {
      getProfile();
    }
  }

  logout () {
    this.props.logout();
    this.props.router.replace('/login');
  }

  render () {
    const { firstName, lastName, photoURL } = this.props;
    let fullName = 'Unknown communist';
    if (firstName && lastName) {
      fullName = `${firstName} ${lastName}`;
    }
    let photo = photoURL || DEFAULT_PHOTO_URL;
    return <Header logout={this.logout} name={fullName} photo={photo} />
  }
}

Dashboard.propTypes = {
  logout: React.PropTypes.func,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  getProfile: React.PropTypes.func,
  accessToken: React.PropTypes.string
};

function mapStateToProps (state) {
  return { ...state.oauth, ...state.profile };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...profileActions, ...oauthActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import cx from 'classnames';
import styles from './styles.sass';
import * as oauthActions from '../../actions/oauthActions';
import * as profileActions from '../../actions/profileActions';
import * as projectsActions from '../../actions/projectsActions';
import Header from '../header';

const DEFAULT_PHOTO_URL = '/profile.png';

class Main extends React.Component {
  constructor () {
    super();
    this.logout = this.logout.bind(this);
  }

  componentDidMount () {
    this.requestInitialData();
  }

  componentWillReceiveProps (nextProps) {
    const { accessToken } = this.props;
    if (accessToken !== nextProps.accessToken) {
      this.requestInitialData();
    }
  }

  requestInitialData () {
    const { getProjects, getProfile } = this.props;
    getProfile();
    getProjects();
  }

  logout () {
    this.props.logout();
    this.props.router.replace('/login');
  }

  render () {
    const { firstName, lastName, photoURL, fetching, children } = this.props;
    let fullName = 'Unknown communist';
    if (firstName && lastName) {
      fullName = `${firstName} ${lastName}`;
    }

    let classNames = cx(styles.container, {
      [styles.loading]: fetching
    });

    let photo = photoURL || DEFAULT_PHOTO_URL;
    return <div className={classNames}>
      <Header logout={this.logout} name={fullName} photo={photo} />
      <div className={styles.preloader}>Analyzing dossier
        {(new Array(3).fill('')).map((_, idx) => <span className={styles.dot} key={idx}>.</span>)}
      </div>
      {children}
    </div>;
  }
}

Main.propTypes = {
  logout: React.PropTypes.func,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  getProfile: React.PropTypes.func,
  getProjects: React.PropTypes.func,
  accessToken: React.PropTypes.string,
  projects: React.PropTypes.array,
  fetching: React.PropTypes.bool,
  children: React.PropTypes.object
};

function mapStateToProps (state) {
  return { ...state.oauth, ...state.profile, ...state.projects};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...profileActions, ...oauthActions, ...projectsActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

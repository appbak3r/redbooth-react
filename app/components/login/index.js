import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as oauthActions from '../../actions/oauthActions';
import styles from './styles.sass';
import cx from "classnames";

class Login extends React.Component {
  constructor () {
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    let code = this.props.location.query.code;
    if (code) {
      this.props.getToken(code);
    }
  }

  onClick () {
    if (!this.props.fetching) {
      this.props.login();
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.accessToken) {
      this.props.router.replace('/');
    }
  }

  getWelcomeMessage () {
    const { fetching, accessToken } = this.props;
    const dots = (new Array(3).fill('')).map( (_, idx) => <span className={styles.dot} key={idx}>.</span>);
    let welcomeMessage = <div>Please sign in</div>;

    if (fetching) {
      welcomeMessage = <div>You are in queue{dots}</div>
    }

    if (accessToken) {
      welcomeMessage = <div>Redirecting{dots}</div>
    }
    return welcomeMessage;
  }

  render () {
    const { fetching, accessToken } = this.props;

    let className = cx(styles.button, {
      [styles.loading]: fetching || (!fetching && accessToken)
    });

    return <div className={styles.container}>
      <div className={styles.centered}>
        <div className={styles.welcome}>
          Welcome to Redbooth, Comrade!
          {this.getWelcomeMessage()}
        </div>
        <a href="javascript: void(0);" onClick={this.onClick} className={className}>Get voucher to use Redbooth</a>
      </div>
    </div>
  }
}

Login.propTypes = {
  login: React.PropTypes.func,
  accessToken: React.PropTypes.string,
  getToken: React.PropTypes.func,
  fetching: React.PropTypes.bool
};

function mapStateToProps (state) {
  return state.oauth;
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(oauthActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
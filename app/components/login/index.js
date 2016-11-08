import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as oauthActions from '../../actions/oauthActions';

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
    this.props.login();
  }

  componentWillUpdate (nextProps) {
    if (nextProps.accessToken){
      this.props.router.replace('/');
    }
  }

  render () {
    let template = '';
    if (this.props.fetching){
      template = <div>fetching</div>
    }

    return <div>
      <a href="javascript: void(0);" onClick={this.onClick}>Authorize with Redbooth</a>
      {template}
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
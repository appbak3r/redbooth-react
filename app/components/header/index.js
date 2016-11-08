import React from 'react';
import { bindActionCreators } from 'redux'
import styles from './styles.sass';
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    const { name, logout, photo } = this.props;

    return <div className={styles.header}>
      <Link to='/' className={styles.logo}>Redbooth</Link>
      <div className={styles.right}>
        <div className={styles.dropdown}>
          <img src={photo} className={styles.photo} />
          {name}
          <div className={styles.dropdownList}>
            <Link onClick={logout}>emigrate</Link>
          </div>
        </div>
      </div>
    </div>
  }
}

Header.propTypes = {
  logout: React.PropTypes.func,
  name: React.PropTypes.string,
  photo: React.PropTypes.string
};

export default Header;



import React, { Component } from 'react';
import logo from '../../assets/img/github-logo-invert.png';
import { connect } from 'react-redux';
import { openForm } from './../../actions/actions';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <div className="container col-md-8 col-xl-6 justify-content-between">
          <a
            className="navbar-brand"
            href="https://github.com/KNazarenko/KNazarenko.github.io"
          >
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="KNazarenko.github.io"
            />
            <span className="appName">Todo</span>
          </a>
          <button
            type="button"
            id="newTaskBtn"
            className="btn btn-warning btn-sm"
            onClick={this.props.openForm}
          >
            New task
          </button>
          <div className="df">
            Total tasks:
            <strong className="text-warning pl-2" id="totalTasks">
              0
            </strong>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  openForm: PropTypes.func.isRequired
};

export default connect(
  null,
  { openForm }
)(Header);

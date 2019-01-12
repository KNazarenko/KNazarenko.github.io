import React, { Component } from 'react';
import Welcome from './Main/Welcome';
import Tasks from './Main/Tasks';
import Add from './Main/Add';

export default class Main extends Component {
  render() {
    return (
      <div className="container col-md-8 col-xl-6 mt-3">
        <Welcome />
        <Tasks />
        <Add />
      </div>
    );
  }
}

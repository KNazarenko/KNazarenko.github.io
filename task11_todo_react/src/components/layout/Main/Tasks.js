import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks } from './../../../actions/actions';
import PropTypes from 'prop-types';
import Task from './Task';

class Tasks extends Component {
  componentDidMount() {
    console.log(55, this.props);
    getTasks();
  }
  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <div id="tasksCollection" className="row justify-content-center">
        <div className="col">
          <ul
            id="tasksList"
            className="jumbotron pt-0 pb-2 border mb-0"
            style={{ maxHeight: '300px', overflow: 'auto' }}
          >
            {tasks.map(function(task) {
              return <Task key={task.ID} {...task} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.items
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Tasks);

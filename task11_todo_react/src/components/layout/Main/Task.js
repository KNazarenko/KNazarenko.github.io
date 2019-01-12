import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  render() {
    const { id, name, project, priority, description } = this.props;
    return (
      <li id={`tasksItem-${id}`} className="card mt-2">
        <div className="card-body">
          <div className="row mt-2">
            <div className="col-8">
              <strong className="card-title">
                <mark>{name}</mark>
              </strong>
            </div>
            <div className="col-4">
              <strong className="float-right">
                Priority:
                <span id="priorityNumber" className="text-danger ml-2">
                  {priority}
                </span>
              </strong>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-8">
              <strong>
                Project:
                <span className="text-primary ml-2">{project}</span>
              </strong>
            </div>
            <div className="col-4">
              <div
                className="btn-group btn-group-sm float-right"
                role="group"
                aria-label="Basic example"
              >
                <i
                  className="fas fa-pencil-alt editBtn"
                  style={{
                    color: 'black'
                  }}
                  // onClick={this.onDeleteClick.bind(this, id)}
                />
                <i
                  className="fas fa-times deleteBtn"
                  style={{
                    color: 'red'
                  }}
                  // onClick={this.onDeleteClick.bind(this, id)}
                />
                <i
                  className="fas fa-chevron-down maximizeBtn"
                  style={{
                    color: 'black'
                  }}
                  // onClick={this.onDeleteClick.bind(this, id)}
                />
              </div>
            </div>
          </div>
          <p className="card-text mt-2 none">{description}</p>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired
};

export default Task;

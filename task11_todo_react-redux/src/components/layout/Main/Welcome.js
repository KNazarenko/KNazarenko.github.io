import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcomeCard" className="row justify-content-center">
        <div className="col">
          <div
            className="jumbotron pt-0 pb-2 border mb-0"
            style={{ maxHeight: '300px', overflow: 'auto' }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  You don't have saved tasks
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

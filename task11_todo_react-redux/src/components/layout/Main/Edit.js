import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Add extends Component {
  render() {
    const flag = this.props.flag;

    return (
      <div
        id="newTaskForm"
        className={`jumbotron py-2 border bg-white mt-3 ${flag ? 'none' : ' '}`}
      >
        <form className="mt-3">
          <div className="form-group row">
            <label
              htmlFor="inputTaskTitle"
              className="col-sm-5 col-form-label text-right"
            >
              Название задачи
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputTaskTitle"
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="inputProjectTitle"
              className="col-sm-5 col-form-label text-right"
            >
              Название проекта
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputProjectTitle"
                placeholder=""
              />
            </div>
          </div>

          {/* <div className="form-group row">
            <label
              htmlFor="inputPriority"
              className="col-sm-5 col-form-label text-right"
            >
              Приоритет
            </label>
            <div className="col-sm-7">
              <select
                className="custom-select custom-select-sm"
                id="inputPriority"
              >
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div> */}

          <div className="form-group row">
            <label
              htmlFor="inputTaskDescribe"
              className="col-sm-5 col-form-label text-right"
            >
              Описание задачи
            </label>
            <div className="col-sm-7">
              <textarea
                className="form-control form-control-sm"
                id="inputTaskDescribe"
                rows="2"
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group row justify-content-end">
            <div className="col-sm-7">
              <div className="row justify-content-around">
                <button
                  type="submit"
                  id="addBtn"
                  className="btn btn-info btn-sm"
                >
                  Add
                </button>
                <button
                  type="submit"
                  id="updateBtn"
                  className={`btn btn-warning btn-sm ${flag ? ' ' : 'none'}`}
                >
                  Update
                </button>
                <button
                  type="submit"
                  id="cancelBtn"
                  className="btn btn-secondary btn-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Add.propTypes = {
  flag: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  flag: state.flag.closeNewTaskForm
});

export default connect(mapStateToProps)(Add);

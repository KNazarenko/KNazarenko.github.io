import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeForm } from './../../../actions/actions';

class Add extends Component {
  closeNewTaskForm(e) {
    e.preventDefault();
    this.props.closeForm();
  }
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
            <div className="col-sm-7 pr-0">
              <div className="btn-group btn-block row">
                <button
                  type="submit"
                  id="addBtn"
                  className="btn btn-info btn-sm"
                  onClick={this.closeNewTaskForm.bind(this)}
                >
                  Add
                </button>

                <button
                  type="submit"
                  id="cancelBtn"
                  className="btn btn-secondary btn-sm"
                  onClick={this.closeNewTaskForm.bind(this)}
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
  flag: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  flag: state.flag.closeNewTaskForm
});

export default connect(
  mapStateToProps,
  { closeForm }
)(Add);

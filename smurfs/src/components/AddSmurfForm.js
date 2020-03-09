import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createSmurfs } from "../actions/smurfActions";

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.createSmurfs(smurf);

    // this.setState({
    //   name: "",
    //   Age: "",
    //   Height: ""
    // });
  };

  render() {
    return (
      <div>
        <h1>Add Smurf</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label>Age: </label>
            <br />
            <input
              type="text"
              name="age"
              onChange={this.onChange}
              value={this.state.age}
            />
          </div>
          <div>
            <label>Height: </label>
            <br />
            <input
              type="text"
              name="height"
              onChange={this.onChange}
              value={this.state.height}
            />
          </div>
          <br />
          <button type="submit">Add Smurf to Village</button>
        </form>
      </div>
    );
  }
}

AddSmurfForm.propTypes = {
  createSmurfs: PropTypes.func.isRequired
};

export default connect(null, { createSmurfs })(AddSmurfForm);

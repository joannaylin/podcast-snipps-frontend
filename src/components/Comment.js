import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment, removeComment } from "../actions/comment";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.comment.note,
      isEditing: false,
    };
  }

  toggleEditForm = () => {
    this.setState({ isEditing: true });
  };

  handleChange = (e) => {
    this.setState({ note: e.target.value });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateComment(this.props.comment.id, this.state.note);
    this.setState({
      isEditing: false,
    });
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.note}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <p>{this.props.comment.note}</p>
          <button onClick={this.toggleEditForm}>Edit</button>
          <button onClick={() => this.props.removeComment(this.props.comment.id)}>Delete</button>
        </div>
      );
    }
    return result;
  }
}

export default connect(null, { updateComment, removeComment })(Comment);

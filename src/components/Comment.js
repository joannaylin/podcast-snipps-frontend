import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment, removeComment } from "../actions/comment";
import { BaseInput, BaseButton } from "../shared/Forms";
import styled from "styled-components";

const InlineForm = styled.form`
  margin: 0px;
`;

const IconButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  background: transparent;
  font-size: 1.2em;
`;

const CommentDiv = styled.div`
  display: flex;
`;

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
          <InlineForm onSubmit={this.handleUpdate}>
            <BaseInput
              type="text"
              value={this.state.note}
              onChange={this.handleChange}
            ></BaseInput>
            <BaseButton type="submit">Save</BaseButton>
          </InlineForm>
        </div>
      );
    } else {
      result = (
        <CommentDiv>
          <p>{this.props.comment.note}</p>
          <IconButton onClick={this.toggleEditForm}>
            <ion-icon name="create"></ion-icon>
          </IconButton>
          <IconButton
            onClick={() => this.props.removeComment(this.props.comment.id)}
          >
            <ion-icon name="trash"></ion-icon>
          </IconButton>
        </CommentDiv>
      );
    }
    return result;
  }
}

export default connect(null, { updateComment, removeComment })(Comment);

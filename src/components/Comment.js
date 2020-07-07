import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment, removeComment } from "../actions/comment";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const CommentField = styled(TextField)({
  background: "white",
  borderRadius: "100px",
  width: "400px",
  height: "30px",
  paddingBottom: "15px",
});

const Item = styled(ListItem)({
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  borderRadius: "100px",
});

const ItemButton = styled(Button)({
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
});

const SaveButton = styled(Button)({
  backgroundColor: "#1DB954",
  borderRadius: "100px",
  margin: "5px",
  marginTop: "0px",
  padding: "10px 15px",
});

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
            <CommentField
              variant="outlined"
              type="text"
              value={this.state.note}
              onChange={this.handleChange}
            ></CommentField>
            <SaveButton type="submit">Save</SaveButton>
          </form>
        </div>
      );
    } else {
      result = (
        <Item>
          <Typography variant="subtitle1">{this.props.comment.note}</Typography>
          <ListItemSecondaryAction>
            <ItemButton onClick={this.toggleEditForm}>
              <EditIcon style={{ color: "white" }} />
            </ItemButton>
            <ItemButton
              onClick={() => this.props.removeComment(this.props.comment.id)}
            >
              <DeleteIcon style={{ color: "white" }} />
            </ItemButton>
          </ListItemSecondaryAction>
        </Item>
      );
    }
    return result;
  }
}

export default connect(null, { updateComment, removeComment })(Comment);

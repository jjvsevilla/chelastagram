import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/commentsActions'

import Wrapper from './Wrapper';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      comment: ''
    }
  }

  renderComment = (comment, i) => {
    const { user, text } = comment;
    return (
      <p key={i} className="comment">
        <strong>{user}:</strong>
        <span>{text}</span>
      </p>
    );
  }

  renderComments = () => {
    const { chelaComments } = this.props;
    return (
      <div className="comments">
        {chelaComments.map(this.renderComment)}
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { user, comment } = this.state;
    const { chelaId } = this.props;
    this.props.addComment(chelaId, user, comment);
    this.resetForm();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  resetForm = () => {
    this.setState({
      user: '',
      comment: ''
    })
  }

  renderForm = () => {
    const { user, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <input name="user" type="text" placeholder="User" value={user} onChange={this.handleChange} />
        <input name="comment" type="text" placeholder="Comment" value={comment} onChange={this.handleChange} />
        <input type="submit" hidden />
      </form>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.renderComments()}
        {this.renderForm()}
      </Wrapper>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    addComment: (chelaId, user, comment) => dispatch(addComment(chelaId, user, comment))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
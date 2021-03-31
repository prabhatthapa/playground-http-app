import React, { Component } from "react";
import axiosInstance from "../../../axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    console.log(this.props);
    console.log(`---------`);
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id)
      ) {
        axiosInstance
          .get(`/posts/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHandler = () => {
    axiosInstance.delete(`/posts/${this.props.postId}`).then((response) => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.postId) {
      post = <p style={{ textAlign: "center" }}>loading ...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;

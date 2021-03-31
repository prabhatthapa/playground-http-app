import React, { Component } from "react";
import { Route } from "react-router-dom";
import axiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  selectedPostHandler = (id) => {
    this.props.history.push({ pathname: "/posts/" + id });
  };

  componentDidMount() {
    axiosInstance.get("/posts").then((response) => {
      console.log(`response`, response);
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Prabhat",
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.id)}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;

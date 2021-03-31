import React, { Component } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id });
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
        <Link key={post.id} to={`/` + post.id}>
          <Post
            id={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
        </Link>
      );
    });

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;

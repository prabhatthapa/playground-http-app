import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios.get("/posts").then((response) => {
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

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
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
        <section>
          <FullPost postId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;

import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
// import axios from "axios";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;

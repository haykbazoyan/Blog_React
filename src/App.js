import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from './components/Blog/Blog'
import LogIn from './components/LogIn/LogIn'
import CreatePost from './components/CreatePost/CreatePost'


export default function App() {
  return (
    <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">LogIn</Link>
                    </li>
                    <li>
                        <Link to="/createPost">Create Post</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Blog />
                    </Route>
                    <Route exact path="/login">
                        <LogIn />
                    </Route>
                    <Route exact path="/createPost">
                        <CreatePost />
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}



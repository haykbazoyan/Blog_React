import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from './components/Blog/Blog'
import LogIn from './components/LogIn/LogIn'
import CreatePost from './components/CreatePost/CreatePost'
import './App.css';


export default function App() {
  return (
    <Router>
            <div>
                <ul  className='bg-blue-900 text-white flex space-x-20'>
                    <li className='hover:text-blue-900 hover:bg-white px-3 py-3'>
                        <Link className='px-3 py-3' to="/">Blog</Link>
                    </li>
                    <li className='hover:text-blue-900 hover:bg-white px-3 py-3'>
                        <Link className='px-3 py-3' to="/createPost">Create Post</Link>
                    </li>
                    <li className='hover:text-blue-900 hover:bg-white px-3 py-3'>
                        <Link className='px-3 py-3' to="/login">LogIn</Link>
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



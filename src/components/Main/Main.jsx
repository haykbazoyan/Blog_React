import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Blog from '../Blog/Blog'
import LogIn from '../LogIn/LogIn'
import CreatePost from '../CreatePost/CreatePost'
import { PrivateRoute } from '../../helpers/PrivateRoute';

export default function Main() {
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
                    <PrivateRoute path="/createPost" component={CreatePost} />
                </Switch>
            </div>
        </Router>
    )
}
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogNewPost from './BlogNewPost';
import BlogSelected from './BlogSelected';
import Blogs from './Blogs'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <Link to="/">\ Home /</Link>
                        <Link to="/post/blog">\ New Blog Post /</Link>
                        <Link to="/blog/1">\ View Blog /</Link>
                        <div className="row">
                            <Switch>
                                <Route exact path="/" component={Blogs} />
                                <Route exact path="/blog/:id" component={BlogSelected} />
                                <Route exact path="/post/blog" component={BlogNewPost} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;
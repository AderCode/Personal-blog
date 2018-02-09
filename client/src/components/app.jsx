import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogNewPost from './BlogNewPost';
import BlogSelected from './BlogSelected';
import Blogs from './Blogs'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path='/' component={Home} />
                    <div className="container mx-auto" style={{ marginTop: '50px' }}>
                        <div className="row"></div>
                        <div className="row">
                            <Switch>
                                <Route exact path="/" component={Blogs} />
                                <Route exact path="/blog/:id" component={BlogSelected} />
                                <Route exact path="/post/blog" component={BlogNewPost} />
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default Navigation;
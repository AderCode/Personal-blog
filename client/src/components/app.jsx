import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogNewPost from './BlogNewPost';
import BlogSelected from './BlogSelected';
import Blogs from './Blogs'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <div className="container-fluid" style={{ marginTop: '50px' }}>
                        <NavBar />
                        <div className="row mx-auto my-5 py-5">
                            <Switch>
                                <Route exact path="/" component={Blogs} />
                                <Route exact path="/blog/:id" component={BlogSelected} />
                                <Route exact path="/post/blog" component={BlogNewPost} />
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;
import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogSelected extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        };


    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let url = `/api/blog/${id}`;
        fetch(url)
            .then(res => {
                console.log("1st .then res = ", res);
                return res.json();
            })
            .then(obj => {
                console.log("2nd .then obj = ", obj[0]);
                this.setState({
                    blog: obj[0]
                });
            });
    }

    render() {
        let blog = this.state.blog;
        let tags = 'Tags, go, here, but, these, are, just, a, few, placeholders'
        return (
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="../srcImages/headshot-thumbnail.jpg" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                    <p class="card-text">{blog.content}</p>
                </div>
            </div>
        );
    }
}

export default BlogSelected;
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
            <div className="col">
                <h1>{blog.title}</h1>
                <br/>
                <p>{blog.content}</p>
                <br/>
                <p>{tags}</p>
            </div>
        );
    }
}

export default BlogSelected;
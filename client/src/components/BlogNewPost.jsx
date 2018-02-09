import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogNewPost extends Component {

    constructor(props) {
        super(props);
    }

    

    handlePost(event) {
        event.preventDefault();
        const url = "/api/blog/";
        let title = this.title_input.value;
        let content = this.content_input.value;
        let data = { title: title, content: content };
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        console.log("handlePost() completed. data = ", data);
    }

    render() {
        return (
            <div className="col mt-5">
                <h1>New Blog Post:</h1>
                <div className="form-group mt-2">
                    <label>Title:</label>
                    <input onSubmit={(event) => event.preventDefault()} ref={a => {this.title_input = a;}} type="text" className="form-control" id="title_input" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label>Body content:</label>
                    <textarea onSubmit={(event) => event.preventDefault()} ref={a => {this.content_input = a;}} className="form-control" id="body_input" rows="20" placeholder="Content body"></textarea>
                </div>
                <div className="form-group">
                    <label>Tags:</label>
                    <input onSubmit={(event) => event.preventDefault()} ref={a => {this.tags_input = a;}} type="text" className="form-control" id="tags_input" placeholder="Tags are separated by a comma. ex. Tag1, Tag2, Tag3" />
                </div>
                <button className="btn btn-primary" onClick={() => this.handlePost(event)}>Post</button>
            </div>

        )
    }
}

export default BlogNewPost;
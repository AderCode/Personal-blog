import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        let url = `/api/blog/`;
        // if (this.props.match.params.id) {
        //   return (url = `/api/chirps/${this.props.match.params.id}`);
        // }
        fetch(url)
            .then(res => {
                console.log("1st .then res = ", res);
                return res.json();
            })
            .then(obj => {
                console.log("2nd .then obj = ", obj);
                let listBlogs = Object.keys(obj).map(id => {
                    console.log(`obj[${id}.text = ]`, obj[id].text);
                    return (
                        <div className="col-md-3">
                            <div key={obj[id].id} className="card text-center">
                                <div className="card-header">
                                    Featured
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{obj[id].title}</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to={`/blog/${obj[id].id}`} class="btn btn-primary">View</Link>
                                </div>
                                <div className="card-footer text-muted">
                                    {obj[id]._created}
                                </div>
                            </div>
                        </div>

                    );
                });
                this.setState({ blogs: listBlogs });
            });
    }

    render() {
        return <Fragment>{this.state.blogs}</Fragment>;
    }
}

export default Blogs;
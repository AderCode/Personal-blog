import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
class AuthorInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card border border-info">
                <ul className="list-group list-group-flush mx-auto"><li className="list-group-item">
                    <img src="https://lh5.googleusercontent.com/lvvyHY_41jUanhmg51tl06qiz3pk2qPWX-BYkfnllG7curj3pWOgV0C0Co3GYz4xIpieVAKsVoePk9gbnf0e=w3360-h1906-rw" alt="Headshot" className="card-img-top border-bottom border-dark border rounded-circle mx-auto my-3 thumbnail" />
                </li>
                </ul>
                <div className="card-body text-center">

                    <div className="card-title">
                        <h3>Matthew Aderhold</h3>
                    </div>
                    <span className="text-muted px-3"><i className="fas fa-map-marker" /> Birmingham, Al </span><span className="text-muted px-3"><i className="fas fa-link" /> <Link to='/' className="text-muted">Website</Link></span><br/>
                                <span className="text-muted px-2"><i className="fab fa-github-square" /> <a href="https://github.com/AderCode" className="text-muted">Github</a> </span><span className="text-muted px-2"><i className="fab fa-linkedin" /> <a href="https://www.linkedin.com/in/matthew-aderhold/" className="text-muted">LinkedIn</a> </span><span className="text-muted px-2"><i className="fab fa-twitter-square" /> <a href="https://twitter.com/MatthewAderhold" className="text-muted">Twitter</a> </span>
</div>
            </div>
        )
    }

}

export default AuthorInfo;
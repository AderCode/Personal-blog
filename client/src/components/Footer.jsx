import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        let outline = { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }
        return (
            <div className="container-fluid" id="footer">
                <div className="row bg-dark mt-4" style={outline}>
                    <div className="col-md-4 mx-auto">
                        <span className="text-light">
                            <h2 className="text-white mt-5"><u>Recent posts</u></h2>
                            <img src="" alt="" />
                            <p>Title</p>
                            <p>Timestamp</p>
                        </span>

                        <span className="text-light">
                            <img src="" alt="" />
                            <p>Title</p>
                            <p>Timestamp</p>
                        </span>

                        <span className="text-light">
                            <img src="" alt="" />
                            <p>Title</p>
                            <p>Timestamp</p>
                        </span>

                        <span className="text-light">
                            <img src="" alt="" />
                            <p>Title</p>
                            <p>Timestamp</p>
                        </span>
                    </div>

                    <div className="col-md-4 mx-auto mt-5">
                        <h2 className="text-white"><u>Tags</u></h2>
                        <p className="text-light">Tags, would, go, here, but, this, is, just, a, placeholder</p>
                        <br/>
                        <h2 className="text-white"><u>Follow Me</u></h2>
                        <span className="text-light">twitter_ico // linkedin_ico // insta_ico</span>
                    </div>
                    <div className="col-md-4 mx-auto mt-5">
                        <h2 className="text-white"><u>About Me</u></h2>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat id deleniti soluta cumque fuga repudiandae provident autem incidunt, hic non delectus voluptates nulla veritatis. Nam suscipit explicabo fuga molestiae.</p>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: 'black'}}>
                    <p className="mt-2 text-white mx-auto">Copyright stuff and junk.</p>
                </div>
            </div>

        )
    }
}

export default Footer;
import React, { Component } from 'react'
import axios from 'axios';


export class ListOfOnlineE extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }
    componentDidMount = () => {
        this.getBlogPost();
    };

    displayBlogPost = (posts) => {
        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div key={index} className="blog-post-wrap">
                <h3>
                    Name: {post.firstName} {post.mi} {post.lastName}
                </h3>
                <h4>Grada Level: {post.gradelevel}</h4>
                <h4>Gender: {post.gender}</h4>
                <h4>Home Address: {post.address}</h4>
                <h4>Contact number: {post.contact}</h4>
            </div>
        ));
    };

    getBlogPost = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
                console.log('Data has been received!!!');
            })
            .catch(() => {
                alert('Error in retrieving data!!!');
            });
    };


    render() {
        return (
            <div>
                <div className="blogPost">
                    {this.displayBlogPost(this.state.posts)}
                </div>
            </div>
        )
    }
}

export default ListOfOnlineE;

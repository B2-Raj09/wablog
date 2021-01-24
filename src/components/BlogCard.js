import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Blogs.css'


function BlogCard(props) {
    return (
        <div>
            <li className='blog-list'>
                <Link className="blog-link" to={props.path}>
                    <figure className="blog-image-wrap">
                        <img src={props.src} alt="Blog Image" className="blog-image" />
                    </figure>
                    <div className="blog-info">
                        <h5 className="blog-text">{props.text}</h5>
                    </div>
                    <div className="blog-btn">
                        <i className="fa fa-check-square-o"></i>
                        {/* <button>Read know</button> */}
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default BlogCard

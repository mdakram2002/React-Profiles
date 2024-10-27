import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const BlogDetails = () => {

    const { post } = useContext(AppContext);
    return (
        <div>
            <NavLink to={`/blog/${post.id}`} >
                <span>{post.title}</span>
            </NavLink>
            <p>By
                <span>{post.author}</span>
                on {""}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span>{post.category}</span>
                </NavLink>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
                {post.tag.map((tag, index) => {
                    return (
                        <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
                            <span>{`#${tag}`}</span>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default BlogDetails;

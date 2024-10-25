import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        console.log("i'm from BlogPage");
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (err) {
            console.log(err);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }

    }, [location.pathname]);

    return (
        <div>
            <Header />
            <div>
                <button
                    onClick={() => navigation(-1)}
                >
                    Back
                </button>
            </div>
            {
                loading ?
                    (<div>
                        <p>Loading</p>
                    </div>) :

                    blog ?
                        (<div>
                            <BlogDetails post={blog} />
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post) => {
                                    return (
                                        <div key={blog.id}><BlogDetails post={post} /> </div>
                                    )
                                })
                            }

                        </div>
                        ) : (
                            <div>
                                No Posts Found
                            </div>
                        )

            };

        </div >
    );
};

export default BlogPage;

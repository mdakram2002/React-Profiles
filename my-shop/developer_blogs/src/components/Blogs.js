import React, { useContext } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  // const { posts = [], loading = false } = useContext(AppContext) || {};
  const { posts, loading } = useContext(AppContext);
  console.log("Printing inside Blogs component...");
  console.log(posts)

  return (
    <div className='w-11/12 max-w-[650px] py-2 flex h-screen flex-col justify-center items-center gap-y-5 mt-[66px] mb-[70px]'>
      {
        loading ? (<Spinner />) :
          (posts.length === 0 ?
            (<div><p>No Post Found</p></div>) :

            (posts.map((post) => (

              <BlogDetails key={post.id} post={post}/>
              // <div key={post.id}>


              //   {/* Title of the post */}
              //   <p className='font-bold text-xs'>{post.title}</p>


              //   {/* Author and category of the post */}
              //   <p className='text-[10px]'>
              //     By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
              //   </p>


              //   {/* Date of the post */}
              //   <p className='text-10px] '>Posted on {post.date}</p>
              //   <p className='text-[11px] mt-[14px]'>{post.content}</p>


              //   {/* Tags of the post */}
              //   <div className='flex gap-x-2'>
              //     {post.tags.map((tag, index) => {
              //       return (
              //         <span key={index} className='text-blue-400 underline font-bold text-sm'>{`#${tag}`}</span>
              //       )
              //     })}
              //   </div>
              // </div>
            ))
            )
          )
      }
    </div>
  );
}

export default Blogs;

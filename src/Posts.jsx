import React from 'react';
import axios from 'axios';


const Posts = (props) => {

  return (
    <>
        {props.posts.map((post, i) => (
          <div className="posts" key={i}>
            <h4 >UserId: {post.userId}</h4>
            <h4 >{post.title}</h4>
            <p >{post.body}</p>
          </div>
        ))
        }

    </>
  )
}


export default Posts;
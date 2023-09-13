import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {

  const [posts, setPosts] = useState([
    {
      user: "iwiwr7",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaZ3Y26KBtLRme-SqYo9vPXpWkttSjXPq-fxWtmTR7Q&s",
      likes: 21,
      timestamp: '2d',
    },
    {
      user: "tsvtsk",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUJKXekIequKq9v9gmAGXNTdjyJ5WGZSMYxrBMBn2&s",
      likes: 44,
      timestamp: '2h',
    },
    {
      user: "borislav123",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34hPo9zGkYxB2NKePgvPeImdm-CDTsHPrt4DFUyU_4A&s",
      likes: 12,
      timestamp: '21h',
    },
  ]);

  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>

          {posts.map(post => (
            <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
          ))}

        </div>
      </div>

      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline
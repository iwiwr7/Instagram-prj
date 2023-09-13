import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material';


function Post({user , postImage , likes , timestamp }) {
    return (
        <div className='post'>

            <div className='post__header'>
                <div className='post__headerAuthor'>
                    <Avatar className='avatarr'>{user.charAt(0).toUpperCase()}</Avatar>
                    {user} • <span>{timestamp}</span>

                </div>
                <MoreHoriz />
            </div>

            <div className='post__image'>
                <img
                    src={postImage} 
                    alt='' 
                />

            </div>

            <div className='post__footer'>
                <div className='post__footerIcons'>
                    <div className='post__iconsMain'>
                        <FavoriteBorder className='postIcon' />
                        <ChatBubbleOutline className='postIcon' />
                        <Telegram className='postIcon' />
                    </div>
                    <dvi className='post__iconSave'>
                        <BookmarkBorder className='postIcon' />
                    </dvi>
                </div>
                Liked by {likes} people.
            </div>
        </div>
    )
}

export default Post
import React from 'react';

const CommentList = (props) => (
    <div>
        <ul>
            {props.comments.map((item) => {
                return (<li key={item.username}>{item.username}</li>)    
            })}
        </ul>    
    </div>
)git 
export default CommentList;
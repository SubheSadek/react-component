import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/">{props.author}</a>

        <div className="metadata">
          <span className="date">{props.timeago}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;

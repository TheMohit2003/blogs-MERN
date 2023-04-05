import React from 'react';

const ContentBox = ({ title, content, author, image }) => {
    return (
        <div className="content-box">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Written by {author}</p>
        </div>
    );
};

export default ContentBox;

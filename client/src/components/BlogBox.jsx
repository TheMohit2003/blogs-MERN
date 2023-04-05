import React, { useState, useEffect } from 'react';
import './styles/BlogBox.css';
import ContentBox from '';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

const BlogBox = () => {
    const [blog, setBlog] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://example.com/api/data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlog(data);
                console.log(data);
                // Do something with the data
            } catch (error) {
                console.error('There was a problem fetching the data:', error);
            }
        };
        fetchData();
    }, []);

    const blogs = () => {
        blog.map((item) => {
            return (
                <Box
                    sx={{
                        padding: '25px',
                    }}
                >
                    <ContentBox
                        title={title}
                        content={content}
                        author={author}
                        image={image}
                    />
                </Box>
            );
        });
    };

    return <Container>{blogs()}</Container>;
};

export default BlogBox;

import React from 'react';
import './styles/Navbar.css';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
const Navbar = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100px',
                backgroundColor: 'pink',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <h1>Home</h1>
            <h1>Post</h1>
        </Box>
    );
};

export default Navbar;

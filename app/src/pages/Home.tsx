import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 64px)',
            }}
        >
            <div>
                <Typography variant="h1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Samuel Hernandez
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'thin', textAlign: 'center' }}>
                    <b>Machine Learning Engineer:</b> Python | <b>Web Developer:</b> React, Firebase
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        borderRadius: '30px',
                        color: 'white',
                        backgroundColor: '#1E88E5',
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .MuiButton-endIcon': {
                            marginLeft: '8px',
                            verticalAlign: 'middle',
                        },
                    }}
                    component={Link}
                    to="/about"
                >
                    Learn more about me <ArrowForwardIcon />
                </Button>
                <Typography variant="subtitle1" sx={{ fontWeight: 'thin', textAlign: 'center' }}>
                    or
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        borderRadius: '30px',
                        color: 'white',
                        backgroundColor: '#1E88E5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .MuiButton-endIcon': {
                            marginLeft: '8px',
                            verticalAlign: 'middle',
                        },
                    }}
                    component={Link}
                    to="/projects"
                >
                    See my projects <ArrowForwardIcon />
                </Button>
            </div>
        </Box>
    );
}

export default Home;

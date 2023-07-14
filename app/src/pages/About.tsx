import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import aboutMeImage from '../assets/about-me.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function About() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 64px)',
            }}
        >
            <img src={aboutMeImage} alt="Portrait of Samuel Hernandez" style={{ maxWidth: '440px', marginRight: '20px' }} />
            <div>
                <Typography variant="body1" sx={{ maxWidth: '430px', textAlign: 'justify' }}>
                    My name is <b>Samuel Hernandez</b>. I am a <i>machine learning engineer</i> and web <i>developer</i> based in California, USA.
                    I am passionate about cutting-edge technology, pixel-perfect, beautiful interfaces, and leveraging machine
                    learning to solve complex problems. With expertise in both machine learning and web development, I strive to
                    create innovative solutions that combine the power of data-driven insights and elegant user experiences.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '430px', textAlign: 'justify', my:1 }}>
                    Outside of work, I enjoy exploring my creative side through making music, oil painting, skateboarding, and mastering the game of chess.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Link href="https://github.com/SamuelSHernandez" target="_blank" rel="noopener" className="GitHub" sx={{ mx: 2 }}>
                        <GitHubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/samuel-s-hernandez/" target="_blank" rel="noopener" className="LinkedIn" sx={{ mx: 2 }}>
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://www.youtube.com/@algorhythmica" className="YouTube" target="_blank" rel="noopener" sx={{ mx: 2 }}>
                        <YouTubeIcon />
                    </Link>
                </Box>
            </div>
        </Box>
    );
}

export default About;

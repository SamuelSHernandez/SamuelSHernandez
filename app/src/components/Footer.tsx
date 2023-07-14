import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Footer() {
    const [isFooterShown, setIsFooterShown] = React.useState(true);

    const toggleFooter = () => {
        setIsFooterShown(!isFooterShown);
    };

    return (
        <Box
            className="Footer"
            sx={{
                background: '#f8f8f8',
                position: 'fixed',
                bottom: '0.68%',
                right: isFooterShown ? '0.68%' : '-1vw',
                width: isFooterShown ? '16vw' : '4vw',
                height: '16vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                fontWeight: 'light',
                borderRadius: '16px',
                marginRight: '1em',
                transition: 'right 0.3s ease-in-out, width 0.4s ease-in-out',
            }}
        >
            <Box
                onClick={toggleFooter}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: isFooterShown ? '4vw' : '18vw',
                    height: '18vw',
                    cursor: 'pointer',
                }}
            >
                {isFooterShown ? (
                    <ChevronRightIcon
                        sx={{
                            opacity: 0.3,
                            transition: 'opacity 0.3s ease-in-out',
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    />
                ) : (
                    <ChevronLeftIcon />
                )}
            </Box>

            {isFooterShown && (
                <Grid container spacing={2}>
                    <Grid item xs={12} className="Content">
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body1" fontWeight="bold" fontSize={16}>
                                Social Media
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '2vw',
                                }}
                            >
                                <Link
                                    href="https://github.com/SamuelSHernandez"
                                    target="_blank"
                                    rel="noopener"
                                    className="GitHub"
                                    sx={{ mx: 2 }}
                                >
                                    <GitHubIcon />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/samuel-s-hernandez/"
                                    target="_blank"
                                    rel="noopener"
                                    className={"LinkedIn"}
                                    sx={{ mx: 2 }}
                                >
                                    <LinkedInIcon />
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@algorhythmica"
                                    className="YouTube"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ mx: 2 }}
                                >
                                    <YouTubeIcon />
                                </Link>
                            </Box>
                            <Typography variant="body1" fontWeight="bold" fontSize={16}>
                                Contact Info
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Phone: <Link href="tel:3372921622">(337) 292-1622</Link>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Email: <Link href="mailto:sam.hernsa@gmail.com">sam.hernsa@gmail.com</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
}

export default Footer;

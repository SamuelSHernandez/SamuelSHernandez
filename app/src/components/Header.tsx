import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { MemoryRouter, Route, Routes, Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Gallery from '../pages/Gallery';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTabSelected, setIsTabSelected] = useState(0);

    const pages = ['Home', 'About', 'Projects', 'Gallery'];
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <MemoryRouter>
            <AppBar sx={{ boxShadow: 'none', backgroundColor: '#f8f8f8', color: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography paragraph={true} component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    {isMenuOpen && (
                        <div id="menu-items" className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
                            <Tabs
                                textColor="inherit"
                                value={isTabSelected}
                                onChange={(e, isTabSelected) => setIsTabSelected(isTabSelected)}
                                indicatorColor="primary"
                                sx={{ display: 'flex', flexDirection: 'column' }}
                            >
                                {pages.map((page, index) => (
                                    <Tab
                                        key={index}
                                        label={page}
                                        component={Link}
                                        to={`/${page.toLowerCase()}`}
                                    />
                                ))}
                            </Tabs>
                        </div>
                    )}
                    {!isMenuOpen ? (
                        <MenuIcon
                            onClick={toggleMenu}
                            aria-label="Open menu"
                            sx={{
                                opacity: 0.5,
                                transition: 'opacity 0.3s ease-in-out',
                                '&:hover': {
                                    opacity: 1,
                                },
                            }}
                        />
                    ) : (
                        <CloseIcon
                            onClick={toggleMenu}
                            aria-label="Close menu"
                            sx={{
                                opacity: isMenuOpen ? 0.1 : 1,
                                transition: 'opacity 0.3s ease-in-out',
                                '&:hover': {
                                    opacity: 1,
                                },
                            }}
                        />
                    )}
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </MemoryRouter>
    );
}

export default Header;

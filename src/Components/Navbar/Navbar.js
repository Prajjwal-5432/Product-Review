import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ margin: "0 0 20px 0" }}>
                <Toolbar>
                    <Link to="/"><Button style={{ color: "white" }} >Home</Button></Link>
                    <Link to="/search"><Button style={{ color: "white" }} >Search</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
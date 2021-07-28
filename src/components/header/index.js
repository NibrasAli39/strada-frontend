import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./header.css"
import stradalogo from "../../assets/stradablacklogo.png"



export default function Header() {
 

  return (
    <div className="header">
      <AppBar position="static" className="appBar">
      <Toolbar>
    <div className="iconHolder">
      <img src={stradalogo} width={100} className="logoImage" />
    </div>
    <div className="inputHolder">
          <TextField size="small" fullWidth="true" variant="outlined" label="Search Strada..." />
    </div>
    <div className="navLinks">
          <Button className="navlink" color="inherit">Explore</Button>
          <Button className="navlink" color="inherit">FAQs</Button>
          <Button className="navlink" color="inherit">Login</Button>
          <Button className="navlink" color="inherit">Join</Button>
    </div>
       </Toolbar>
      </AppBar>
    </div>
  );
}
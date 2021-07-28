import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

import "./footer.css"
import stradalogo from "../../assets/stradablacklogo.png"



export default function Footer() {
 

  return (
    <div className="footer">
     <div className="imgContainer">
     <img src={stradalogo} width={80} className="logoImage" />
     </div>
     <div className="socials">
     <IconButton  aria-label="upload picture" component="span">
          <YouTubeIcon />
        </IconButton>
        <IconButton  aria-label="upload picture" component="span">
          <FacebookIcon />
        </IconButton>
        <IconButton  aria-label="upload picture" component="span">
          <InstagramIcon />
        </IconButton>
        <IconButton  aria-label="upload picture" component="span">
          <TwitterIcon />
        </IconButton>
     </div>
     <div className="links">
     <Button className="navlink" color="inherit">About</Button>
          <Button className="navlink" color="inherit">Community Guidelines</Button>
          <Button className="navlink" color="inherit">FAQs</Button>
          <Button className="navlink" color="inherit">Help</Button>
          <Button className="navlink" color="inherit">Careers</Button>
          <Button className="navlink" color="inherit">Contact</Button>
     </div>
    </div>
  );
}
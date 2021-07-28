import React from 'react';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./faqs.css";


export default class FAQs extends React.Component {
    render() {
      return (

          <div className="faqsContainer">
<Grid container>
    <Grid container justifyContent="flex-start"  item md={12} sm={12} xs={12}>
    <Typography className="grayTitle" variant="h4" >
                  faqs
    </Typography>
        </Grid>
        <Grid container direction="column" alignItems="flex-start" justifyContent="flex-start"  item md={12} sm={12} xs={12}>
    <Typography variant="h6" >
     What is Strada?
    </Typography>
    <span className="linebreak"/>
        </Grid>
        <Grid container justifyContent="flex-start"  item md={12} sm={12} xs={12}>
    <Typography className="grayTitle" variant="body2" >
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </Typography>
        </Grid>
    </Grid>
          </div>

      );
    }
  }
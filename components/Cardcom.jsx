// import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from "../public/service.png"
const Cardcom = () => {
  return (
    
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/service.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Feedback
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Give Your Valuabel Feedback to help us manage and improve our services.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/Rate' size="small">Give Review</Button>
        <Button size="small">Skip</Button>
      </CardActions>
    </Card>
    
  )
}

export default Cardcom

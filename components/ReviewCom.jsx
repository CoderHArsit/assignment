"use client"
import * as React from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { styled } from '@mui/material/styles';

import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarRating from './StarRating';
import Toastcom from './Toastcom';
import { Router } from 'next/router';
import Link from 'next/link';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const ReviewCom = () => {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [selected, setSelected] = React.useState(null);

    // Handler function for the "yes" option
    const handleClickYes = () => {
        // If "yes" is currently selected, deselect it
        // Otherwise, select "yes" and deselect "no"
        setSelected((prevSelected) => (prevSelected === 'yes' ? null : 'yes'));
    };

    // Handler function for the "no" option
    const handleClickNo = () => {
        // If "no" is currently selected, deselect it
        // Otherwise, select "no" and deselect "yes"
        setSelected((prevSelected) => (prevSelected === 'no' ? null : 'no'));
    };

  return (

    <>
    
    <Card  sx={{ maxWidth: 450 , border: 1 , marginBottom: 7 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
    
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <Link
              href="/"
              className="flex items-center px-3 py-2  hover:rounded-full  
              hover:border-black text-black
               mt-3 mb-6 ml-1"
            >
              <XMarkIcon className="h-6 w-6 " />
            </Link>
      <h1 className='text-3xl font-extrabold ml-4 '>Leave a review</h1>
      <CardMedia
        component="img"
        height="194"
        image="/images.jpeg"
        alt="Paella dish"
      />
      <CardContent>
       <div className='my-5'>
      <h1 className='text-2xl font-bold '>Safety</h1>
        <p className=' font-light text-gray-500 my-2'>How safe do feel with trausty</p>

          <StarRating/>

          </div>
          <div className='my-5'>
      <h1 className='text-2xl font-bold '>Communication</h1>
        <p className=' font-light text-gray-500 my-2'>How was the communication with trausty</p>
        
          <StarRating/>

          </div>
          <div className='my-5'>
      <h1 className='text-2xl font-bold '>Would you recommend Trausti?</h1>
        <p className=' font-light text-gray-500 my-2'>Yor support will be very helpful</p>
        <div >
            <button className='mx-4' onClick={handleClickYes}>{selected==='yes'?<ThumbUpIcon
            fontSize='large'/>:<ThumbUpAltOutlinedIcon
            fontSize='large'/>} Yes</button>
            <button className='mx-4' onClick={handleClickNo}>{selected==='no' ? <ThumbDownIcon fontSize='large'/>: <ThumbDownAltOutlinedIcon
            fontSize='large'/>} No</button>
        </div>
          

          </div>
          <div className='my-5'>
      <h1 className='text-2xl font-bold '>Praise</h1>
        <p className=' font-light text-gray-500 my-2'>How would you praise Trausty?</p>
        
          <Toastcom/>

          </div>
          <div className=' justify-center text-center'>
        <Link  href='/submitted'>
        <button className=' bg-black border-pink-400s  text-white rounded-full text-sm font-bold w-36 h-16 sm:text-lg  hover:bg-slate-500' size="small">Give Review</button></Link>  
          </div>
        </CardContent>
      
    </Card>
    </>
  )
}

export default ReviewCom

// src/components/VideoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle ,demoChannelUrl} from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video }) => {

  const { id, snippet } = video;
  const videoId = id?.videoId;
  const channelId = id?.channelId;

  console.log("video",video);

  return (
    <Card sx={{width:{md :'280px',xs:'100%'}, boxShadow:'none',borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{background:'#1e1e1e',height:'106px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color='#fff'>
            {snippet?.title.slice(0,60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color='grey'>
            {snippet?.channelTitle}
            <CheckCircle sx={{fontSize:12
            , color:'grey', ml: '5px'}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

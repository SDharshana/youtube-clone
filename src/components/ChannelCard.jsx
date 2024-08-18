// src/components/ChannelCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { demoProfilePicture, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Card>
      <Link to={`/channel/${channelDetail?.id?.channelId || demoChannelUrl}`}>
        <CardMedia
          component="img"
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title || demoChannelTitle}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent>
        <Link to={`/channel/${channelDetail?.id?.channelId || demoChannelUrl}`}>
          <Typography variant="h6">
            {channelDetail?.snippet?.title || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;

import React from 'react';
import { Box, Grid } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  console.log("Received videos in Videos component:", videos); // Log the received videos

  if (!Array.isArray(videos) || videos.length === 0) {
    return <div>No videos found</div>;
  }

  return (
    <Box  >
      <Grid container spacing={2}>
        {videos.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Box sx={{  padding: 1 }}>
              <VideoCard video={item} />
              {item.id?.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;

import React from 'react'
import { useState, useEffect } from 'react'
import { Box,Stack ,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const[selectedcategory,setselectedcategory] = new useState('New');
  const[videos,setvideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      let allVideos = [];
      let nextPageToken = '';
      let iterationCount = 0;

      while (iterationCount < 4) {
        const data = await fetchFromAPI(`search?part=snippet&q=${selectedcategory}`, nextPageToken);
        allVideos = [...allVideos, ...data.items];

        if (!data.nextPageToken) {
          break;
        }

        nextPageToken = data.nextPageToken;
        iterationCount += 1;
      }

      setvideos(allVideos);
    };

    fetchVideos();
  }, [selectedcategory]);
  return (
    <Stack sx={{ flexDirection:{ sx:'column',md:'row'}, background :'#000'}}>
      <Box sx={{height:{sx : 'auto',md: '92vh'},
        borderRight:'1px solid #3d3d3d',
        px:{ sx : 0 , md : 2}
      }}>
        <Sidebar
          selectedcategory={selectedcategory}
          setselectedcategory={setselectedcategory}
        />
        <Typography className='copyright' variant='body2'
        sx={{mt: 1.5 , color : '#fff'}}
        >
          Copyright 2024
        </Typography>
      </Box>
      <Box sx={{overflowY:'auto',height:'92vh',flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
           {selectedcategory} <span style={{color:'#f31503'}}> Video</span>
        </Typography>

        <Videos videos={[videos]} />
      </Box>
    </Stack>
  )
}

export default Feed
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideosHI from "./VideosHi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        console.log('API Response:', data);  // Log the API response
        setVideos(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API Error:', error);  // Log any API errors
        setVideos([]);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        <span style={{ color: "#FC1503", justifyContent:'center',alignContent:'center' }}>Search Results for {searchTerm} videos</span> 
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' },background:'#fff'}}/>
        {loading ? <div>Loading...</div> : <VideosHI videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;


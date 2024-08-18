import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed,SearchFeed,VideoDetail,ChannelDetails} from './components'

const App = () => (
    <BrowserRouter>
        <Box sx={{background: '#000'}}>
            <Navbar />
        </Box>
        <Routes>
            <Route path='/' exact element={<Feed />}/>
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
  );

export default App
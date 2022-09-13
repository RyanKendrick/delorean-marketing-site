import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Section1 = () => {
  return (
    <div>
        <video width="100%" autoPlay muted loop>
        <source 
          src="https://delorean.com/wp-content/uploads/2022/08/Untitled.mp4" 
          type="video/mp4"
          />
        
      </video>
      <div className="scroll-animation-container">
          <div className="scroll-animation">
            <div className='scroll-label'>SCROLL</div>
              <Box sx={{ width: '20%', color: 'grey.500' }}>
                <LinearProgress color='inherit'/>
              </Box>
          </div>
      </div>
    </div>
  )
}

export default Section1
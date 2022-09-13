import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Section1 = () => {

  
  
  const reveal = () => {
    let reveal = document.getElementById('animated-h2') as HTMLElement
    let windowHeight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top
    let revealPoint = 100

    if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('animated-h2-active')
    } else {
        reveal.classList.remove('animated-h2-active')
    }


  }

  window.addEventListener('scroll', reveal)

  return (
    <div className='section1'>
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
      <div className='bottom-div'>
        <div className="paragraph">
            <p>DeLorean is unapologetically human.</p>
            <p>A New Energy mobility brand.</p>
            <p>We have a clear vision of our future, knowing it does not represent today.</p>
        </div>
            <div id='animated-h2' className='animated-h2-before'>
                <h2>THE FUTURE WAS NEVER PROMISED</h2>
            </div>
            <div className="alpha-logo"><img src="https://delorean.com/wp-content/uploads/2022/05/Asset-1@3x.png" alt="" /><br /></div>
            <div ><img className="reserve-img" src="https://delorean.com/wp-content/uploads/2022/09/Asset-28.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Section1
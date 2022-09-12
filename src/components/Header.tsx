import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-logo-container'><img className='header-logo' src="https://delorean.com/wp-content/uploads/2022/03/DeLorean-Logo-White-2048x75.webp" alt="" /></div>
        <div><img className='reserve-button' src="https://delorean.com/wp-content/uploads/2022/03/Reserve-Explore@3x-300x40.png" alt="" /></div>
        <div className='right-div'>
            <img className='dmc-button' src="https://delorean.com/wp-content/uploads/2022/03/DMC-CLASSIC-LOGO-WHITE@2x.png" alt="" />
            <div className='hamburger'>
                <div className='ham-line'></div>
                <div className='ham-line'></div>
                <div className='ham-line'></div>
            </div>
        </div>
       
    </div>
  )
}

export default Header
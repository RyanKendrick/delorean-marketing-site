import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
  return (
    <>
        <div className='header'>
            <div className="header-container">
                <div className="left-div">
                    <div className='header-logo-container'><img className='header-logo' src="https://delorean.com/wp-content/uploads/2022/03/DeLorean-Logo-White-2048x75.webp" alt="" /></div>
                    <div><img className='reserve-button' src="https://delorean.com/wp-content/uploads/2022/03/Reserve-Explore@3x-1024x138.png" alt="" /></div>
                    <div className="left-div-blank"></div>
                </div>
                <div className='right-div'>
                    <div className='right-div-blank'></div>
                    <img className='dmc-button' src="https://delorean.com/wp-content/uploads/2022/03/DMC-CLASSIC-LOGO-WHITE@2x.png" alt="" />
                    <div className='hamburger'>
                        <div className='ham-line'></div>
                        <div className='ham-line'></div>
                        <div className='ham-line'></div>
                    </div>
                </div>
            </div>
            <div className="mobile-container">
            <img className='reserve-button-mobile' src="https://delorean.com/wp-content/uploads/2022/03/Reserve-Explore@3x-1024x138.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Header



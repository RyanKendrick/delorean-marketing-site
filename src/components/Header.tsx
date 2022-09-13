import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
  return (
    <>
        <div className="header-container">
            <div className="header">
                <div className="left-div">
                    <div><img className='header-logo' src="https://delorean.com/wp-content/uploads/2022/03/DeLorean-Logo-White-2048x75.webp" alt="" /></div>
                </div>
                <div className="center-div">
                    <div><img className='reserve-button' src="https://delorean.com/wp-content/uploads/2022/03/Reserve-Explore@3x-1024x138.png" alt="" /></div>
                </div>
                <div className="right-div">
                    <div><img className='dmc-button' src="https://delorean.com/wp-content/uploads/2022/03/DMC-CLASSIC-LOGO-WHITE@2x.png" alt="" /></div>
                <div className='hamburger'>
                     <div className='ham-line'></div>
                     <div className='ham-line'></div>
                     <div className='ham-line'></div>
                 </div>
                </div>
            </div>
            <div className="sub-header">
            <div className='dmc-button-container'><img className='dmc-button' src="https://delorean.com/wp-content/uploads/2022/03/DMC-CLASSIC-LOGO-WHITE@2x.png" alt="" /></div>
            <div className='reserve-button-container'><div><img className='reserve-button' src="https://delorean.com/wp-content/uploads/2022/03/Reserve-Explore@3x-1024x138.png" alt="" /></div></div>
            </div>
        </div>
    </>
  )
}

export default Header



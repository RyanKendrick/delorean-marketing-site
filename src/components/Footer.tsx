import React from 'react'

const Footer = () => {

    const navOptions = [
        { title: 'MEDIA' },
        { title: 'CAREERS' },
        { title: 'GALLERY' },
        { title: 'CORPORATE' },
        { title: 'INVESTOR RELATIONS' },
        { title: 'CONTACT' }

    ]
  return (
    <div className='footer'>
        
        <div className="footer-top">
            <img className='footer-alpha-img' src="https://delorean.com/wp-content/uploads/2022/05/Asset-1@3x.png" alt="" />
            <img className='signup-btn' src="https://delorean.com/wp-content/uploads/2022/05/Sign-Up@2x.png" alt="" />
            <div>FOLLOW US ON</div>
            <div className="social-icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-youtube"></i>   
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
            </div>
            
        </div>
        <div className="footer-center">
            {navOptions.map((i: any) => (
                <div>{i.title}</div>
            ))}
        </div>
        <div className="footer-bottom">
            <div className="left-div">
                <div>PRIVACY POLICY</div>
                <div>TERMS & CONDITIONS</div>
                <div>COOKIE POLICY</div>
            </div>
            <div className="right-div">
                <div>© Lorem ipsum dolor sit amet consectetur</div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
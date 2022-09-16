import React from 'react'

const Section6 = () => {

    const reveal = () => {
        let reveal = document.getElementById('animated-h2-6') as HTMLElement
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
    <div className='section6'>
       <img className='top-img' src="https://delorean.com/wp-content/uploads/2022/05/DAL500001-1-2048x1153.webp" alt="" />
       <div className='bottom-div'>
        <div className="paragraph">
		    We reimagine ourselves daily.<br/>
            We have a clear vision of our future,<br/>
            knowing it does not represent today.
        </div>

            <div id='animated-h2-6' className='animated-h2-before'>
                <h2>HUMAN - CONNECTED - CREATIVE</h2>
            </div>
            
            <div><img className="reserve-img" src="https://delorean.com/wp-content/uploads/2022/05/DeLorean-Brand@2x.png" alt="" /></div>
            <div className="delo-logo"><img src="https://delorean.com/wp-content/uploads/2022/03/White-Logo-Final@2x.png" alt="" /><br /></div>
      </div>
    </div>
  )
}

export default Section6
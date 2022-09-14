import React from 'react'

const Section2 = () => {

const reveal = () => {
    let reveal = document.getElementById('animated-h2-s2') as HTMLElement
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
    <div className='section2'>
        <div className="top-div">
            <img className='background-img' src="https://delorean.com/wp-content/uploads/2022/05/DAL500012-BANNER2-2048x1153.webp" alt="" />
            <img className='experience-btn' src="https://delorean.com/wp-content/uploads/2022/05/Experience-Alpha5@2x.png" alt="" />
        </div>
        <div className="bottom-div">
            <p className="section2-p">
            The DMC-12 was never meant to be a static interpretation of the brand, the brand would constantly evolve. Our icons are reimagined. DMC is and always was in constant evolution. An Icon is validated over time but to constantly reimagine mobility allows new icons to come into existence.
            </p>
            <h2 id='animated-h2-s2' className='animated-h2-before'>REBELLIOUS - ICONIC - DESIGN</h2>
            <div><img className='journey-img' src="https://delorean.com/wp-content/uploads/2022/05/Our-Journey@2x.png" alt="" /></div>
            <div className='model-logos'>
                <div><img src="https://delorean.com/wp-content/uploads/2022/05/Asset-7@3x.webp" alt="" /></div>
                <div><img src="https://delorean.com/wp-content/uploads/2022/05/Asset-8@3x.webp" alt="" /></div>
                <div><img src="https://delorean.com/wp-content/uploads/2022/05/Asset-9@3x.webp" alt="" /></div>
                <div><img src="https://delorean.com/wp-content/uploads/2022/05/Asset-10@3x.webp" alt="" /></div>
            </div> 
        </div>
    </div>
  )
}

export default Section2
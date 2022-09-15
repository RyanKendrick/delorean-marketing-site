import React from 'react'

interface Section5Props {
    quotes: any,
    currentQuote: any,
    quoteSelect: any,
}

const Section5: React.FC<Section5Props> = ({ quotes, currentQuote, quoteSelect }) => {


    const showQuote = () => {
        let reveal = document.getElementById('quotes-animate') as HTMLElement
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top
        let revealPoint = 100
    
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('quote-active')
           
        } else {
            reveal.classList.remove('quote-active')
           
        }
    
    }
    
    window.addEventListener('scroll', showQuote)  
  return (
    <div className='section5'>
        <img className='top-img' src="https://delorean.com/wp-content/uploads/2022/05/DAL500017-BANNER5-2048x1153.webp" alt="" />
        <div id='quotes-animate' className="quotes">
            {quotes.map((i: any, index: any) => (
                <div className={index === currentQuote ? 'slide active' : 'slide'} key={index}>
                    {index === currentQuote && (
                        <div key={index}>
                            <div>{i.quote}</div>
                            <div className='author'>{i.author}</div>
                            <div className='title'>{i.title}</div>
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
        
        <div className="quotes-pagination">
            {quotes.map((i: any, index: any) => (
                <div onClick={quoteSelect} title={index} className={index === currentQuote ? 'bullet-active' : 'bullet'}>.</div>
            ))}
        </div>
       
    </div>
  )
}

export default Section5
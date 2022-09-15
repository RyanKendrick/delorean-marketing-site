import React, { useEffect } from 'react'

interface Section5Props {
    quotes: any,
    currentQuote: any,
    quoteSelect: any,
}

const Section5: React.FC<Section5Props> = ({ quotes, currentQuote, quoteSelect }) => {

    

  return (
    <div className='section5'>
        <img className='top-img' src="https://delorean.com/wp-content/uploads/2022/05/DAL500017-BANNER5-2048x1153.webp" alt="" />
        <div className="quotes">
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
import React from 'react'
import Radio from '@mui/material/Radio';

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
                        <div>
                            <div>{i.quote}</div>
                            <div>{i.author}</div>
                            <div>{i.title}</div>
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
        {quotes.map((i: any, index: any) => (
            <Radio 
            sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: 'white',
                },
              }}
              checked={index === currentQuote}
              key={index}
              value={index}
              onClick={quoteSelect}
            />
        ))}
    </div>
  )
}

export default Section5
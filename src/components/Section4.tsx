import React, { useEffect } from 'react'
 
interface Section4Props {
    stats: any,
}

const Section4: React.FC<Section4Props> = ({ stats }) => {
  
  

   
  return (
    <>  
    <div className='section4'>
        <div id='stats' className='stats-container'>
            <img className='stats-title-img' src="https://delorean.com/wp-content/uploads/2022/05/Base-Performance-Model-2048x78.webp" alt="" />
            <div className='stats-grid'>
                {stats.map((i: any, index: any) => (
                    <div key={index}>
                        <div className="stat-title">
                            <h5 key={index}>{i.label}</h5>
                        </div>
                        <div><span key={index} className='num-counter' data-target={i.num}>0</span> {i.measure}</div>
                    </div>
                ))}
            </div>
            <div className="spacer">*Images and videos shown contain pre-production vehicles — actual production vehicle performance may differ slightly. Some range and charge times are preliminary manufacturer estimates based on the EPA test cycle and are not official EPA values. All official EPA values are noted. Vehicle range varies with conditions including weather, driving behavior, vehicle condition and load, and battery age.</div>
            
        </div>
            
    </div>
        
    </>
  )
}

export default Section4 
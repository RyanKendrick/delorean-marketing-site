import React from 'react'
 
interface Section4Props {
    stats: any,
}

const Section4: React.FC<Section4Props> = ({ stats }) => {

   
  return (
    <>
        <div className='section4'>
                {/* <img className='background-img' src="https://delorean.com/wp-content/uploads/2022/05/DAL500020-8-2048x1655.webp" alt="" /> */}
                <div className='stats-container'>
                    <img className='stats-title-img' src="https://delorean.com/wp-content/uploads/2022/05/Base-Performance-Model-2048x78.webp" alt="" />
                    <div className='stats-grid'>
                        {stats.map((i: any, index: any) => (
                            <div>
                                <div className="stat-title">
                                    <h5>{i.title}</h5>
                                </div>
                                <div><span className='num-counter'>{i.num}</span> {i.measure}</div>
                            </div>
                        ))}
                    </div>
                    <div className="spacer">*Images and videos shown contain pre-production vehicles — actual production vehicle performance may differ slightly. Some range and charge times are preliminary manufacturer estimates based on the EPA test cycle and are not official EPA values. All official EPA values are noted. Vehicle range varies with conditions including weather, driving behavior, vehicle condition and load, and battery age.</div>
                    {/* <img className='bottom-img' src="https://delorean.com/wp-content/uploads/2022/05/DAL500017-BANNER5-2048x1153.webp" alt="" /> */}
                </div>
                
        </div>
        
    </>
  )
}

export default Section4 
import React from 'react'
import MarqueeComponent from './MarqueeComponent'


function WeOchiMaruqee() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed='.2'>
      <MarqueeComponent textInMarquee={'we are ochi'} />
    </div>
  )
}

export default WeOchiMaruqee

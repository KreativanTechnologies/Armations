import React from 'react'
import Hero from '../../components/Customized/Hero.jsx'
import Grid from '../../components/Customized/Grid.jsx'
import Remote from '../../components/Customized/Remote.jsx'


const page = () => {
  return (
    <div className='w-full h-full flex flex-col md:gap-[5vw] bg-white'>
    <Hero/>
    <Remote/>
    <Grid/>
    
    </div>
)
}

export default page
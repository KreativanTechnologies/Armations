import React from 'react'
import Hero from '../../components/CustomizedSolution/Hero.jsx'
import Grid from '../../components/CustomizedSolution/Grid.jsx'
import Remote from '../../components/CustomizedSolution/Remote.jsx'


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
import React from 'react'
import Banner from '../../../components/Supervisory/Banner.jsx'
import ScadaInfo from '../../../components/Supervisory/ScadaInfo.jsx'
const page = () => {
  return (
    <div>
      <Banner bgImage={'/images/supervisory/banner.png'} title={"Supervisory control and Data Aquisition"}/>
      <ScadaInfo/>
      </div>
  )
}

export default page
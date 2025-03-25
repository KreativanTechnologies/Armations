import React from 'react'
import Banner from '../../components/Supervisory/Banner'
import ScadaInfo from '../../components/Supervisory/ScadaInfo'
function page() {
  return (
    <div>
        <div>supervisory and data acquisation</div>
          <Banner bgImage={'/images/supervisory/banner.png'} title={'Supervisory Control and Data Acquisition'}/>
            <ScadaInfo/>
    </div>
  )
}

export default page
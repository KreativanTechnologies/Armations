'use client';

import React from 'react'
import Hero from '../../../components/CustomizedSolution/Hero.jsx'
import Grid from '../../../components/CustomizedSolution/Grid.jsx'
import Remote from '../../../components/CustomizedSolution/Remote.jsx'

const Page = () => {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <Remote />
        <Grid />
      </main>
    </div>
  );
};

export default Page;

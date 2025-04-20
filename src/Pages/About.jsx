import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../context'

const About = () => {

  // const data = {
  //   name: "Vinod Thapa",
  //   image: './images/about1.svg',
  // }

  const {updateAboutPage} = useGlobalContext();

    useEffect( ()=>{
      updateAboutPage();
    },[] )

  return (
    <HeroSection />               //now we don't have to send 'data' to herosection independenly, bec in herosection we are calling usegloabalcontext that have the data
  )
}

export default About

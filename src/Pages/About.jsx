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
   <HeroSection description="DotLogic is a digital tech solutions company focused on building scalable, performance-driven websites, mobile apps, and cloud-integrated software. Our mission is to help businesses grow through innovative technology and modern design." />            //now we don't have to send 'data' to herosection independenly, bec in herosection we are calling usegloabalcontext that have the data
  )
}

export default About

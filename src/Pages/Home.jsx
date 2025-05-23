import React,{useContext, useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../context'
import Services from './Services';
import Contact from './Contact';
 
const Home = () => {

  const {updateHomePage} = useGlobalContext();   

  useEffect(()=>{         //this call the updataHomePage once when the page load s
    updateHomePage();
  },[])


  return (
    <>
    <HeroSection description="We are DotLogic. We build high-performance, scalable, and beautiful websites and applications for your business." />    <Services/>
    <Contact/>
    </>
    
  )
}

export default Home

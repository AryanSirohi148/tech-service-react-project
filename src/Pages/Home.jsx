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
    <HeroSection /> 
    <Services/>
    <Contact/>
    </>
    
  )
}

export default Home

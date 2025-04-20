import React,{useContext, useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../context'
 
const Home = () => {

  // const data = {
  //   name: "Thapa Technical",
  //   image: './images/hero.svg',
  // }
  const {updateHomePage} = useGlobalContext();   

  useEffect(()=>{         //this call the updataHomePage once when the page load s
    updateHomePage();
  },[])


  return (
    <HeroSection /> 
  )
}

export default Home

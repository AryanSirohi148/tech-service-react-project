 

import React, { useContext, useReducer } from "react";
import reducer from './reducer'

const AppContext = React.createContext();
const intialState = {
    name: '',
    image: '',
}



const AppProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,intialState) //we have to intialise the intial state above

    const updateHomePage = ()=>{
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {       //in this we have to provide the same value as above
                    name: 'Thapa Technical_H',
                    image: './images/hero.svg',
                }
            }
        )
    }
    
    const updateAboutPage = ()=>{
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {       //in this we have to provide the same value as above
                    name: 'Vinod Thapa_A',
                    image: './images/about1.svg',
                }
            }
        )
    }

  return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}} >{children}</AppContext.Provider>;
};

//global custom hook, it have same value as above 
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider,useGlobalContext };


//we use this context api in herosection page

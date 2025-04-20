 

import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="vinod bahdur">{children}</AppContext.Provider>;
};

//global custom hook, it have same value as above 
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider,useGlobalContext };


//we use this context api in herosection page

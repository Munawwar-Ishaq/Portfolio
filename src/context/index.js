import React, { useState, createContext, useContext } from "react";

const PortfolioContext = createContext();

const PortfolioProvider = (props) => {
  const [offsetVal, setOffsetVal] = useState({
    about: 0,
    contact: 0,
    project: 0,
    skills: 0,
  });



  return (
    <PortfolioContext.Provider value={{ offsetVal, setOffsetVal }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

const usePortfolioContext = () => useContext(PortfolioContext); 

export { PortfolioProvider ,  usePortfolioContext};

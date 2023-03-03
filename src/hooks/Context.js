import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [pageNo, setPageNo] = useState(1);

  return (
    <AppContext.Provider value={{ pageNo, setPageNo }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;

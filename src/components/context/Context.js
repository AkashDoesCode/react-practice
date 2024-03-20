import React from 'react'

const useContext=React.createContext(null);

const ContextProvider=useContext.Provider;
const ContextCosumer= useContext.Consumer;

export {ContextProvider, ContextCosumer}
export default useContext;

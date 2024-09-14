import React, { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";

// Create the context
export const DataContext = createContext();

// DataProvider component
export const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

// PropTypes validation
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};

// Custom hook to use the DataContext
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

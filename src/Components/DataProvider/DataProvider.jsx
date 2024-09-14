// src/Components/DataProvider/DataProvider.jsx
import { createContext, useReducer } from "react";
import { reducer, initialState } from "../../Utility/reducer"; // Ensure this path is correct

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

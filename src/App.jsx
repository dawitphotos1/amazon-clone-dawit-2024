// src/App.jsx

// import Router from "./Router"; // Correct import path

// function App() {
//   return (
//     <div>
//       <Router />
//     </div>
//   );
// }

// export default App;


// 
// src/App.jsx
import React, { useContext, useEffect } from 'react';
import Router from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
import { Type } from './Utility/action.type.js';
import { auth } from './Utility/firebse'; // Ensure this is the correct import

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [dispatch]); // Include dispatch as a dependency

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;

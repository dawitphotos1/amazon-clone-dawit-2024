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


// src/App.jsx
import React, { useContext, useEffect } from 'react'
import Router from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
import { Type } from './Utility/action.type.js';
import { auth } from './Utility/firebse';

function App() {
  const [{user},dispatch]=useContext(DataContext)
   useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        // console.log(authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    })
      
   },[])


  return (
    <div>
      <Router />
    </div>
  );
}

export default App;


// import React, { createContext, useReducer } from 'react';
// import Create from '../components/Create';
// import { userReducer } from './Reducers';
    

// const ApiContext=createContext();

// const Context = ({userData}) => {
//   const [state, dispatch] = useReducer(userReducer,{
//     userData:[userData]
//   });
//   console.log(state.userData);
//   return (
//     <>
//         <ApiContext.Provider value={{state,dispatch}}>
//             <Create  userData={userData}/>
//         </ApiContext.Provider>
//     </>
//   )
// }

// export default Context;
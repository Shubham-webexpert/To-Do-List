import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import UserData from "./components/userdata/UserData";
import UpdateUser from "./components/Update/UpdateUser";
import Create from "./components/Create/Create";

export const ApiContext = createContext();

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div className="App">
      <ApiContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserData />}/>
              <Route path="/adduser" element={<Create />} />
              <Route path="/updateuser" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </div>
  );
}

export default App;

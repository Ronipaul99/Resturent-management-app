import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Navbar from './component/Navbar';
import { useState } from 'react';
import {LoginContext} from './LoginContext'

function App() {
  const [openLogin, setopenLogin] = useState(false)

  return (
    <div className="App">
      <LoginContext.Provider value={{openLogin , setopenLogin}}>
        <Navbar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<NoPage />} />
          </Routes>
          {openLogin&&<Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

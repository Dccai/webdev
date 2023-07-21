import logo from './logo.svg';
import './App.css';
import  { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FrontPage } from './pages/FrontPage/FrontPage.js';
import { About } from './pages/About/About.js';
function App() {
  function NavBar (){
    return (
      <>
      <nav>

        <div>  <Link to="/">Home</Link></div>
        <div>  <Link to="/About">About</Link></div>
        
      </nav>
      </>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

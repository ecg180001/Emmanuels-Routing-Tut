import './App.css';
import Nav from './Pages/Nav'
import Home from './Pages/Home';
import About from './Pages/About'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Profile/:username" element={<Profile/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
/*
Notes: Keep your ui in sync with your url
- render different componenets at specific pages
- rutes determine where in your component you want to have routes
- link is a more effect way to redirect between pages
- useNavigate allows for redirection during event handling
- you can pass parameters between pages
*/
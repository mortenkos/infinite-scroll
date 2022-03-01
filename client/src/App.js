import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Content from './pages/Content';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

import './App.scss'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <div className="app">
      {user ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={user ? <Content /> : <Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;

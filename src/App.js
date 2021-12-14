import { Route, Routes } from 'react-router';

import {  AuthProvider } from './contexts/AuthContext';
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolios';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';
import Create from './components/Creeate/Create';
import Edit from './components/Edit/Edit';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile';


function App() {

  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />}/>
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:actorId"  element={<Details />} />
        <Route path="/edit/:actorId"  element={<Edit />} />
      </Routes>

      <Footer />
    </div>
    </AuthProvider>
   
  );
}

export default App;

import { Route, Routes } from 'react-router';
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
function App() {
   
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/:actorId/details"  element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

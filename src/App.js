import { Route, Routes } from 'react-router';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';
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


const initialAuthState = {
  _id: '',
  email: '',
  accessToken: ''
}

function App() {
    const [user, setUser] = useLocalStorage("user", initialAuthState);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
      setUser(initialAuthState);
    }

  return (
    <AuthContext.Provider value={{user, login, logout}} >
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
    </AuthContext.Provider>
  );
}

export default App;

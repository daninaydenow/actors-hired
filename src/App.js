import { Route, Routes } from "react-router";

import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolios";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Create from "./components/Creeate/Create";
import Edit from "./components/Edit/Edit";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import UserRoute from "./components/UserRoute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Routes accessible for all types of users */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolios" element={<Portfolio />} />
          <Route path="/details/:actorId" element={<Details />} />
          <Route path="*" element={<NotFound />} />

          {/* Private routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            }
          />

          {/* Guest specific routes */}
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />

          {/* User specific routes */}
          <Route
            path="/edit/:actorId"
            element={
              <UserRoute>
                <Edit />
              </UserRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

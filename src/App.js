import { Route, Routes } from "react-router";

import { ErrorBoundary } from "react-error-boundary";

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
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Routes accessible for all types of users */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/portfolios"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Portfolio />
              </ErrorBoundary>
            }
          />
          <Route
            path="/details/:actorId"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Details />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />

          {/* Private routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Profile />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />

          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Logout />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Create />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />

          {/* Guest specific routes */}
          <Route
            path="/login"
            element={
              <GuestRoute>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Login />
                </ErrorBoundary>
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Register />
                </ErrorBoundary>
              </GuestRoute>
            }
          />

          {/* User specific routes */}
          <Route
            path="/edit/:actorId"
            element={
              <UserRoute>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Edit />
                </ErrorBoundary>
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

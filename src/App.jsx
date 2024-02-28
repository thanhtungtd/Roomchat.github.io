import './App.css'
import './style.scss'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'



function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ( {children}) => {
    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route 
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>}>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { JSX, useContext } from 'react';

import Login from './components/pages/login/Login';

import './style/global.scss';
import Header from './components/header/Header';
import Register from './components/pages/register/Register';
import { UserProvider, AuthContext  } from './context/UserProvider';
import Home from './components/pages/home/Home';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { authenticated } = useContext(AuthContext);
console.log(authenticated)
  return authenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} /> */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { JSX, useContext } from 'react';

import Login from './components/pages/login/Login';

import './style/global.scss';
import Register from './components/pages/register/Register';
import { UserProvider, AuthContext  } from './context/UserProvider';
import Home from './components/pages/home/Home';
import PostPage from './components/pages/postPage/PostPage';
import Profile from './components/pages/profile/Profile';
import Header from './components/header/Header';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { authenticated } = useContext(AuthContext);
console.log(authenticated)
  return authenticated ? children : <Navigate to="/login" />;
}

function LayoutWrapper() {
  const location = useLocation();

  const noHeaderRoutes = ['/login', '/register'];

  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <>
       {!hideHeader && <Header />}
       <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/post' element={<PostPage />} />
       </Routes>
    </>
  )
}

function App() {
  return (
    
    <Router>
      <UserProvider>
          <LayoutWrapper />
      </UserProvider>
    </Router>
  );
}

export default App;

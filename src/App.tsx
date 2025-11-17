import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { JSX, useContext } from 'react';

import Login from './pages/login/Login';

import './style/global.scss';
import Register from './pages/register/Register';
import { UserProvider, AuthContext  } from './context/UserProvider';
import Home from './pages/home/Home';
import PostPage from './pages/postPage/PostPage';
import Profile from './pages/profile/Profile';
import Header from './components/header/Header';
import ChatPage from './pages/chatPage/ChatPage';
import NewPost from './pages/newPost/NewPost';

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
          <Route path='/forum' element={<Home />} />
          {/* <Route path='/forum' element={<PrivateRoute><Home /></PrivateRoute>} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/nova-postagem' element={<NewPost />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/chat' element={<ChatPage />} />
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

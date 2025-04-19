import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/login/Login';

import './style/global.scss';
import Header from './components/header';
import Register from './components/pages/register/Register';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

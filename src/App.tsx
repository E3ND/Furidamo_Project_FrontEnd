import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/login/index';

import './style/global.scss';
import Header from './components/header';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

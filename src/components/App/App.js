import React from 'react';
import Sidebar from '../Sidebar';
import Routes from '../Routes';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes />
    </Router>
  );
}

export default App;

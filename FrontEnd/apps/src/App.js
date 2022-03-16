import React, {Component}  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Asset from './pages/Asset';
import ListKantor from './pages/ListKantor';
import CetakReport from './pages/CetakReport';
import Logout from './pages/Logout';

function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Dashboard />} />
          <Route path="/list_kantor" element={<ListKantor />} />
          <Route path='/asset' element={<Asset />} />
          <Route path='/cetak_report' element={<CetakReport />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;

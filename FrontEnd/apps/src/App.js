import React, {Component}  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import { Master,DataPenguji, DataPeserta } from './pages/Master';
import FitAndPropper from './pages/FitAndPropper';
import PencarianFitPropper from './pages/PencarianFitPropper';
import AdministrasiUser from './pages/AdministrasiUser';

function App() {
  return(
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  exact element={<Dashboard />} />
          <Route path="/master" exact element={<Master />} />
          <Route path="/master/data-peserta" exact element={<DataPeserta />} />
          <Route path="/master/data-penguji" exact element={<DataPenguji />} />
          <Route path='/fit-and-propper' exact element={<FitAndPropper />} />
          <Route path='/report' exact element={<Report />} />
          <Route path='/search-fit-propper' exact  element={<PencarianFitPropper />} />
          <Route path='/administrasi-user' exact element={<AdministrasiUser />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;

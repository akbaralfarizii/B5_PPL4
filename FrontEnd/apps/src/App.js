import React, {Component}  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Master from './pages/Master';
import FitAndPropper from './pages/FitAndPropper';
import Report from './pages/Report';
import PencarianFitPropper from './pages/PencarianFitPropper';
import AdministrasiUser from './pages/AdministrasiUser';
import DataPeserta from './pages-submenu/master/DataPeserta';
import DataPenguji from './pages-submenu/master/DataPenguji';
import PendaftaranFitAndPropper from './pages-submenu/fit-and-propper/PendaftaranFitAndPropper';
import PendaftaranWawancara from './pages-submenu/fit-and-propper/PendaftaranWawancara';
import PenilaianFitAndPropper from './pages-submenu/fit-and-propper/PenilaianFitAndPropper';
import PenilaianWawancara from './pages-submenu/fit-and-propper/PenilaianWawancara';
import RekapNilaiFitAndPropper from './pages-submenu/report/RekapNilaiFitAndPropper';
import RekapManualNilaiFitAndPropper from './pages-submenu/report/RekapManualNilaiFitAndPropper';
import CetakNilaiFitAndPropper from './pages-submenu/report/CetakNilaiFitAndPropper';
import RekapNilaiWawancara from './pages-submenu/report/RekapNilaiWawancara';
import CetakNilaiWawancara from './pages-submenu/report/CetakNilaiWawancara';
import InputDataPeserta from './pages-submenu/master/InputDataPeserta';
import InputDataPenguji from './pages-submenu/master/InputDataPenguji';
import PostDataPeserta from './pages-submenu/master/PostDataPeserta';

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
            <Route path="/master/input-data-peserta" exact element={<InputDataPeserta />} />
              <Route path="/master/input-data-peserta/cek" exact element={<PostDataPeserta />} />

            <Route path="/master/input-data-penguji" exact element={<InputDataPenguji />} />

          <Route path='/fit-and-propper' exact element={<FitAndPropper />} />
            <Route path='/fit-and-propper/pendaftaran-fit-propper' exact element={<PendaftaranFitAndPropper/>} />
            <Route path='/fit-and-propper/pendaftaran-wawancara' exact element={<PendaftaranWawancara/>} />
            <Route path='/fit-and-propper/penilaian-fit-propper' exact element={<PenilaianFitAndPropper/>} />
            <Route path='/fit-and-propper/penilaian-wawancara' exact element={<PenilaianWawancara/>} />
            <Route path='/fit-and-propper/pendaftaran-fit-propper' exact element={<PendaftaranFitAndPropper/>} />

          <Route path='/report' exact element={<Report />} />
            <Route path='/report/rekap-nilai-fit-propper' exact element={<RekapNilaiFitAndPropper/>} />
            <Route path='/report/rekap-manual-nilai-fit-propper' exact element={<RekapManualNilaiFitAndPropper/>} />
            <Route path='/report/cetak-nilai-fit-propper' exact element={<CetakNilaiFitAndPropper/>} />
            <Route path='/report/rekap-nilai-wawancara' exact element={<RekapNilaiWawancara/>} />
            <Route path='/report/cetak-nilai-wawancara' exact element={<CetakNilaiWawancara/>} />

          <Route path='/search-fit-propper' exact  element={<PencarianFitPropper />} />
          <Route path='/administrasi-user' exact element={<AdministrasiUser />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;

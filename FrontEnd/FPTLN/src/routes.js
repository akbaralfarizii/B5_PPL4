import React from 'react'

//Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Master
const DataPeserta = React.lazy(() => import('./views/master/DataPeserta/DataPeserta'))
const DataPenguji = React.lazy(() => import('./views/master/DataPenguji/DataPenguji'))

// Fit and Propper
const PendaftaranFitAndPropper = React.lazy(() => import('./views/fitandpropper/PendaftaranFitAndPropper/PendaftaranFitAndPropper'))
const PendaftaranWawancara = React.lazy(() => import('./views/fitandpropper/PendaftaranWawancara/PendaftaranWawancara'))
const PenilaianFitAndPropper = React.lazy(() => import('./views/fitandpropper/PenilaianFitAndPropper/PenilaianFitAndPropper'))
const PenilaianWawancara = React.lazy(() => import('./views/fitandpropper/PenilaianWawancara/PenilaianWawancara'))

//Report
const RekapNilaiFitAndPropper = React.lazy(() => import('./views/report/RekapNilaiFitAndPropper/RekapNilaiFitAndPropper'))
const RekapManualNilaiFitAndPropper = React.lazy(() => import('./views/report/RekapManualNilaiFitAndPropper/RekapManualNilaiFitAndPropper'))
const CetakNilaiFitAndPropper = React.lazy(() =>import('./views/report/CetakNilaiWawancara/CetakNilaiWawancara'))
const RekapNilaiWawancara = React.lazy(() => import('./views/report/RekapNilaiWawancara/RekapNilaiWawancara'))
const CetakNilaiWawancara = React.lazy(() => import('./views/report/CetakNilaiWawancara//CetakNilaiWawancara'))

//Pencarian Fit And Propper
const PencarianFitAndPropper = React.lazy(() => import('./views/searchfitandpropper/PencarianFitAndPropper'))

//Administrasi Users
const AdministrasiUsers = React.lazy(() => import('./views/administrasiusers/AdministrasiUsers'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/master', name: 'Master', element: DataPenguji, exact: true },
  { path: '/master/datapeserta', name: 'Data Peserta', element: DataPeserta },
  { path: '/master/datapenguji', name: 'Data Penguji', element: DataPenguji },

  { path: '/fit&propper', name: 'Fit And Propper', element: PendaftaranFitAndPropper, exact: true },
  { path: '/fit&propper/pendaftaranfit&propper', name: 'Pendaftaran Fit And Propper', element: PendaftaranFitAndPropper },
  { path: '/fit&propper/pendaftaranwawancara', name: 'Pendaftaran Wawancara', element: PendaftaranWawancara },
  { path: '/fit&propper/penilaianfit&propper', name: 'Penilaian Fit And Propper', element: PenilaianFitAndPropper },
  { path: '/fit&propper/penilaianwawancara', name: 'Penilaian Wawancara', element: PenilaianWawancara },

  { path: '/report', name: 'Report', element: RekapNilaiFitAndPropper, exact: true },
  { path: '/report/rekapnilaifit&propper', name: 'Rekap Nilai Fit & Propper', element: RekapNilaiFitAndPropper },
  { path: '/report/rekapmanualnilaifit&propper', name: 'Rekap Manual Nilai Fit & Propper', element: RekapManualNilaiFitAndPropper },
  { path: '/report/cetaknilaifit&propper', name: 'Cetak Nilai Fit & Propper', element: CetakNilaiFitAndPropper },
  { path: '/report/rekapnilaiwawancara', name: 'Rekap Nilai Wawancara', element: RekapNilaiWawancara },
  { path: '/report/cetaknilaiwawancara', name: 'Cetak Nilai Wawancara', element: CetakNilaiWawancara },

  { path: '/pencarianfit&propper', name: 'Pencarian Fit & Propper', element: PencarianFitAndPropper },

  { path: '/administrasiusers', name: 'Administrasi Users', element: AdministrasiUsers },

]

export default routes

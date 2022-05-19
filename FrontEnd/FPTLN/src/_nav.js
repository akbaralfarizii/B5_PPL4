import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilPaperclip,
  cilSearch,
  cilSpeedometer,
  cilSpreadsheet,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Master',
    to: '/master',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Data Peserta',
        to: '/master/datapeserta',
      },
      {
        component: CNavItem,
        name: 'Data Penguji',
        to: '/master/datapenguji',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fit & Propper',
    to: '/fit&propper',
    icon: <CIcon icon={cilPaperclip} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pendaftaran Fit & Propper',
        to: '/fit&propper/pendaftaranfit&propper',
      },
      {
        component: CNavItem,
        name: 'Pendaftaran Wawancara',
        to: '/fit&propper/pendaftaranwawancara',
      },
      {
        component: CNavItem,
        name: 'Penilaian Fit & Propper',
        to: '/fit&propper/pencarianfit&propper',
      },
      {
        component: CNavItem,
        name: 'Penilaian Wawancara',
        to: '/fit&propper/penilaianwawancara',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Report',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Rekap Nilai Fit & Propper',
        to: '/report/rekapnilaifit&propper',
      },
      {
        component: CNavItem,
        name: 'Rekap Manual Nilai Fit & Propper',
        to: '/report/rekapmanualnilaifit&propper',
      },
      {
        component: CNavItem,
        name: 'Cetak Nilai Fit & Propper',
        to: '/report/cetaknilaifit&propper',
      },
      {
        component: CNavItem,
        name: 'Rekap Nilai Wawancara',
        to: '/report/rekapnilaiwawancara',
      },
      {
        component: CNavItem,
        name: 'Cetak Nilai Wawancara',
        to: '/report/cetaknilaiwawancara',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Pencarian Fit & Propper',
    to: '/pencarianfit&propper',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Administrasi Users',
    to: '/administrasiusers',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav

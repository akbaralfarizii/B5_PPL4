import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Master',
    path: '/master',
    icon: <AiIcons.AiOutlineForm/>,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Data Peserta',
        path: '/master/data-peserta',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Data Penguji',
        path: '/master/data-penguji',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]

  },

  {
    title: 'Fit & Propper',
    path: '/fit-and-propper',
    icon: <MdIcons.MdMonitor/>,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Pendaftaran Fit & Propper',
        path: '/fit-and-propper/pendaftaran-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Pendaftaran Wawancara',
        path: '/fit-and-propper/pendaftaran-wawancara',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Penilaian Fit & Propper',
        path: '/fit-and-propper/penilaian-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Penilaian Wawancara',
        path: '/fit-and-propper/penilaian-wawancara',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },

  {
    title: 'Report',
    path: '/report',
    icon: <FaIcons.FaRegNewspaper />,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Rekap Nilai Fit & Propper',
        path: '/report/rekap-nilai-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rekap Manual Nilai Fit & Propper',
        path: '/report/rekap-manual-nilai-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cetak Nilai Fit & Propper',
        path: '/report/cetak-nilai-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rekap Nilai Wawancara',
        path: '/report/rekap-nilai-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cetak Nilai Wawancara',
        path: '/report/cetak-nilai-fit-propper',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },

  {
    title: 'Search Fit Propper',
    path: '/search-fit-propper',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },

  {
    title: 'Administrasi User',
    path: '/administrasi-user',
    icon: <MdIcons.MdAdminPanelSettings />,
    cName: 'nav-text'
  },

];

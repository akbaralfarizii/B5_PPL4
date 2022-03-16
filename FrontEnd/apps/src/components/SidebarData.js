import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

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
    cName: 'nav-text'
  },
  {
    title: 'Fit and Propper',
    path: '/fitandasset',
    icon: <MdIcons.MdMonitor/>,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/cetak_report',
    icon: <FaIcons.FaRegNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Search Fit Propper',
    path: '/logout',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Administrasi User',
    path: '/logout',
    icon: <MdIcons.MdAdminPanelSettings />,
    cName: 'nav-text'
  },

];

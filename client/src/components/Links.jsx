import react from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  { text: 'Papular products', path: '.', icon: <MdQueryStats /> },
   { text: 'Equipment', path: 'equipment', icon: <MdQueryStats /> },
    { text: 'Accessories', path: 'accessories', icon: <MdQueryStats /> },
     { text: 'Supplies', path: 'supplies', icon: <MdQueryStats /> },
      { text: 'parts', path: 'parts', icon: <MdQueryStats /> },
  { text: 'add Proudct', path: 'add-Proudct', icon: <FaWpforms /> },
  { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];

export default links;
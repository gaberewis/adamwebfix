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
  { text: 'add Product', path: 'add-Product', icon: <FaWpforms /> },


];

export default links;
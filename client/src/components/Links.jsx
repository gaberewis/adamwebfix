import react from 'react';
import { IoIosHome } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";

const links = [
  { text: '', path: '/dashboard?popular=yes', icon: <IoIosHome /> },
  { text: 'Equipment', path: '/dashboard?category=equipment', icon: <TbCategoryPlus /> },
  { text: 'Accessories', path: '/dashboard?category=accessories', icon: <TbCategoryPlus /> },
  { text: 'Supplies', path: '/dashboard?category=supplies', icon: <TbCategoryPlus /> },
  { text: 'Parts', path: '/dashboard?category=parts', icon: <TbCategoryPlus /> },
  
];

export default links;

    

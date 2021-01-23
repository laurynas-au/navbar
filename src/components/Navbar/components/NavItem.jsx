import React, { useState } from 'react';
import './NavItem.scss';

const NavItem = (props) => {

const [open, setOpen] = useState(false);

  return (
    <li className="navbar__item">
      <a href="#" className="navbar__icon-button" aria-label={props.label} onClick={()=>setOpen(!open)}>
        {props.icon} 
      </a>
      {open && props.children}
    </li>
  )
};

export default NavItem;
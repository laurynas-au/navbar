import React from 'react';
import NavItem from './components/NavItem';
// import { ReactComponent as ArrowLeft } from '../../assets/arrow_left.svg';
// import { ReactComponent as ArrowRight } from '../../assets/arrow_right.svg';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';
// import { ReactComponent as Bolt } from '../../assets/bolt.svg';
// import { ReactComponent as Caret } from '../../assets/caret.svg';
// import { ReactComponent as ChevronLeft } from '../../assets/chevron_left.svg';
// import { ReactComponent as ChevronRight } from '../../assets/chevron_right.svg';
// import { ReactComponent as Cog } from '../../assets/cog.svg';
import { ReactComponent as MessengerIcon } from '../../assets/messenger.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import './Navbar.scss';

const Navbar = (props) =>  (
    <nav className="navbar">
      <ul className="navbar__nav">
        <NavItem icon={<PlusIcon />} label="more options"/>
        <NavItem icon={<BellIcon />} label="notifications"/>
        <NavItem icon={<MessengerIcon />} label="messenger">Hello World</NavItem>       
      </ul>
    </nav>
  );

export default Navbar;
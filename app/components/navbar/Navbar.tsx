import React from 'react';
import Logo from './Logo';
import Search from './Search';
import CartCount from './CartCount';
import User from './User';
import Drawer from './Drawer';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 bg-purpleLight h-16 text-slate-100">
      <Logo />
      <Search />
      <CartCount />
      <User />
      <Drawer />
    </div>
  );
};

export default Navbar;

import React from 'react';
import { twMerge } from 'tailwind-merge';

const User = ({ className }: { className?: string }) => {
  return <div className={twMerge('max-md:hidden', className)}>User</div>;
};

export default User;

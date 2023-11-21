import React from 'react';
import { twMerge } from 'tailwind-merge';

const CartCount = ({ className }: { className?: string }) => {
  return <div className={twMerge('max-md:hidden', className)}>CartCount</div>;
};

export default CartCount;

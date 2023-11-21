import React from 'react';
import { twMerge } from 'tailwind-merge';

const Search = ({ className }:{ className?: string }) => {
  return <div className={twMerge('md:flex flex-1 max-md:hidden', className)}>Search</div>;
};

export default Search;

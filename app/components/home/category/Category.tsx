'use client';
import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
  const categoryList = [
    {
      title: 'Ayakkabı',
    },
    {
      title: 'Ayakkabı',
    },
    {
      title: 'Ayakkabı',
    },
    {
      title: 'Ayakkabı',
    },
    {
      title: 'Ayakkabı',
    },
    {
      title: 'Ayakkabı',
    },
    {
      title: 'Ayakkabı',
    },
  ];

  return (
    <div className="flex justify-center items-center gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto custom-vertical-scrollbar px-3 md:px-10 pb-1">
      {categoryList.map((category, index) => (
        <CategoryItem key={index} title={category.title} />
      ))}
    </div>
  );
};

export default Category;

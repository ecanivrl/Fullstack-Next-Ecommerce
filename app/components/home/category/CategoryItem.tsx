import React from 'react'

const CategoryItem = ({title}:{title:string}) => {
  return (
        <h1 className='flex flex-1 items-center justify-center px-4 py-2 border border-purpleDark rounded-full min-w-[120px]'>{title}</h1>
  )
}

export default CategoryItem
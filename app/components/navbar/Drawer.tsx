import React from 'react'
import Menu from "@/public/icons/menu.svg"

const Drawer = () => {
  return (
    <div className=' md:hidden'>
      <Menu className="[&_circle]:stroke-current [&_path]:fill-current w-10"/>
    </div>
  )
}

export default Drawer
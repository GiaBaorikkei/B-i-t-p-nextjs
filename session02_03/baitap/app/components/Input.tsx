import React from 'react'
import "../globals.css"
import { FaRegEye } from "react-icons/fa6";

export default function Input() {
  return (
    <div className='left-9 shadow-yellow-50'>
        <label htmlFor=""className='text-blue-400 text-xs'>Label</label><br />
        <FaRegEye className='absolute left-44 top-7' />
        <input type="text" value='Placegolder' className='outline-blue-500 outline rounded-sm border-x-4 text-sm w-48 '/>
        <p className='text-gray-400 text-xs'>Helper Text</p> 
    </div>
  )
}

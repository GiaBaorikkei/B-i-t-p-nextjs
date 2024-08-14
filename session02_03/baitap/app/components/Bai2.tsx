import React from 'react'
import { LuAlarmClock } from "react-icons/lu";
import { FcCollapse } from "react-icons/fc";


export default function Bai2() {
  return (
    <div className='flex justify-center '>
        <div className="w-64 p-2 border border-gray-300 rounded-md">
    <div className="flex items-center border-b border-gray-300">
        <span className="mr-2"><LuAlarmClock /></span>
        <input
            type="text"
            placeholder="Input Label"
            className="w-full p-2 outline-none"
        />
        <button className="ml-2">
            <span className="transform rotate-90"><FcCollapse /></span>
        </button>
    </div>
    <div className="py-2">
        <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" checked />
            <span>Label</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
            <span>Label</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
            <span>Label</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" checked />
            <span>Label</span>
        </label>
    </div>
    <div className="flex justify-between mt-2">
        <button className="text-black bg-gray-500 px-4 py-1 rounded">Clear</button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Apply</button>
    </div>
</div>

    </div>
  )
}

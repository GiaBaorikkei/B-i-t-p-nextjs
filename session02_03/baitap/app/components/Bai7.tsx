import React from 'react'

export default function Bai7() {
  return (
    <div>
         <div className="flex space-x-4">
      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
        Success
      </button>
      <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
        Warning
      </button>
      <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
        Danger
      </button>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Primary
      </button>
    </div>
    </div>
  )
}

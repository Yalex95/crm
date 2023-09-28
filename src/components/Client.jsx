import React from 'react'

const Client = ({client}) => {
    const {name,company,email,phone,id} = client

  return (
    <tr className='border-b'>
        <td className="p-6 space-y-2">
            <p className="text-2xl text-gray-800">{name}</p>
            <p >{company}</p>
        </td>
        <td className="p-6">
            <p className="text-gray-600">
                <span className="text-gray-800 uppercase font-bold">Email: </span>
                { email}
            </p>
            <div className="text-gray-600">
                <span className="text-gray-800 uppercase font-bold">Phone: </span>
                {phone}
            </div>
        </td>
        <td className="p-6 flex gap-3">
            <button className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">
                Edit
            </button>
            <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                Remove
            </button>
        </td>
    </tr>
  )
}

export default Client
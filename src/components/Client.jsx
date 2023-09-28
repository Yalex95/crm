import React from 'react'

const Client = ({client}) => {
    const {name,company,email,phone,id} = client
    
  return (
    <tr>
        <td className="p-6">{name}</td>
        <td className="p-6">{phone} - { email}</td>
        <td className="p-6"></td>
    </tr>
  )
}

export default Client
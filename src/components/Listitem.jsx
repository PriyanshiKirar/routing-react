import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Listitem = () => {
    const navigate=useNavigate();
    const params=useParams();
  return (
    <div>
<h1 className='text-2xl text-red-700 mb-2'>{params.i}</h1>
<button onClick={()=>navigate(-1)} className='px-3 py-2 border border-red-600 text-xl rounded-md' >Back</button>
    </div>
  )
}

export default Listitem
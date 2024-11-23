import React from 'react'
import { MdClose } from 'react-icons/md'

const AddEditNotes = ({ onClose }) => {
  return (
    <div className='relative'>
      <button className='w-10 h-10 rounded-full flex items-center justify-center 
      absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}><MdClose className='text-xl text-slate-400' /></button>

      <div>
        <label className='input-label text-red-400'>Title</label>
      </div>
    </div>
  )
}

export default AddEditNotes
import React from 'react'
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {IoMdClose} from 'react-icons/io'

const SearchBar = ({value, onchange, handleSearch, onClearSearch}) => {
  return (
    <div className='w-40 sm:w-60 md:w-80 flex items-center px-4 bg-slate-100 rounded-md'>
        <input type="text" placeholder='Search Note...' className='w-full text-xs bg-transparent py-[11px] outline-none'  
        value={value} onChange={onchange}/>

        {value && (
            <IoMdClose className='text-slate-500 text-xl cursor-pointer hover:text-black mr-3'
        onClick={onClearSearch}/> 
        )}

        <FaMagnifyingGlass className='text-slate-500 text-xl cursor-pointer hover:text-black outline-none'
        onClick={handleSearch}/>

    </div>
  )
}

export default SearchBar
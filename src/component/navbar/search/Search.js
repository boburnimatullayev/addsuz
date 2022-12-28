import React from 'react'
import "./search.scss"

const Search = () => {
  return (
    <div>
      <div className="search-form">
        <form action="#">
          <input  className='search-input' type="text" placeholder='Search...' />
           <label className='search-icon'>

                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#14191F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#14191F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 
           </label>

        </form>
      </div>
    </div>
  )
}

export default Search
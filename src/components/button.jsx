import React from 'react'

function button({buttontext,className}) {
  return (
    <div>

    <button class= {`relative  md:py-3 lg:py-3  overflow-hidden bg-transparent  border border-white px-6 py-2  transition duration-300 group ${className ? className :""}`}>
    <span class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
    <span class={`relative  font-semibold text-white transition-all duration-500 group-hover:text-black ${className ? className :""}`}>{buttontext}</span>
  </button> 

    </div>
  )
}

export default button

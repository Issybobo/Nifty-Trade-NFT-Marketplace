import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4 bg-slate-900 text-white'>
  <div className='container mx-auto max-w-screen-xl relative'>
    {/*flex container */}
    <div>
        {/*logo */}
        <a href='/' className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-fuchsia-500 via-red-600 to-orange-400 text-left'>
        <span> NIFTYTRADE</span> 
        </a>
    </div>
  </div>
    </nav>
    
  )
}

export default Navbar
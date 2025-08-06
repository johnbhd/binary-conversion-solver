import React from 'react'

function MainLayout({ children }) {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
        <header className='text-gray-100'>
            <h2>Binary Conversion Solver</h2>
        </header>
        <main className='mt-4'>
            {children}
        </main>
    </div>
  )
}

export default MainLayout
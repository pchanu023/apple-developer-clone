import React from 'react'

function Banner() {
  return (
    <header className='bg-[rgba(240,240,240,0.8)] overflow-hidden text-center '>
        <div className='my-20'>
        <h1 className='text-[56px] text-bold'>Apple Intelligence</h1>
        <h2 className='text-[27px]'>Deliver powerful, intuitive, and integrated personal intelligence</h2>
        
        <div className='flex justify-center'>
        <img className='w-[1400px] transform -translate-y-20' src="https://developer.apple.com/home/images/tile-apple-intelligence/large/medium_2x.png" alt=""/>
        </div>

        </div>
    </header>
  )
}

export default Banner

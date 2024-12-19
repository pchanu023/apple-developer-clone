import React from 'react'

export default function Plan() {
  return (
    <div className='text-white  bg-black flex items-center justify-center'>
        <div className='w-[980px] mx-auto] text-center'>
            <div className='p-[1.5em]'>
                <h2 className='text-[40px] font-bold'>Introducing Pathways</h2>
                <p className='text-[19px] mt-[0.4em]'>You first step toward developing for Apple platforms</p>
            </div>
            <ul>
                <li>
                    <a href="#"><img className='mb-10' src="https://developer.apple.com/pathways/images/hero-pathways-large_2x.png" alt="" /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

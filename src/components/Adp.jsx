import React from 'react'

export default function Adp() {
  return (
    <section className='bg-gradient-to-br from-[#bf46a5] to-[#341d8c] py-[50px]'>
        <div className='flex justify-center'>
            <div className='text-center'>
                <img width={144} className='mx-auto filter brightness-0 invert'  src="https://developer.apple.com/assets/elements/icons/symbols/person-3.svg" alt="" />
                <h2 className='text-[40px] font-bold text-white'> Apple Developer Program</h2>
                <h5 className='text-[19px] text-white'>Join the Apple Developer Program to reach customers around the world on the <br /> App Store for iPhone,iPad,Mac,Apple Watch,Apple TV, and Apple Vision Pro. <br /> You'll also get access to beta software,advanced app capabilities,extensive <br /> beta testing tools,and app analytics. </h5>
            </div>
        </div>
    </section>
  )
}

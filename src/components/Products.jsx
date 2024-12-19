import React from 'react'

export default function Products() {
  return (
    <div> 
      <ul className='flex flex-wrap'>
        <li className='w-full md:w-[50%] h-[592px] bg-[#fafafa] border-[6px] border-solid border-[#fff]' >
            <a href="#">
                <div className='text-center'>
                    <h3 className='text-[32px] font-bold mt-[50px]'>VisionOS</h3>
                    <div className='flex justify-center'>
                    <img className='w-[500px] h-[280px] mt-[100px]' src="https://developer.apple.com/home/images/tile-vision-dev/vision-home-large.png?1" alt="" />
                    </div>
                </div>
            </a>
        </li>

        <li className='w-full md:w-[50%] h-[592px] bg-[#fafafa] border-[6px] border-solid border-[#fff]' >
            <a href="#">
                <div className='text-center'>
                    <h3 className='text-[32px] font-bold mt-[50px]'>IOS 18</h3>
                    <div className='flex justify-center'>
                    <img className='w-[165px] h-[330px] mt-[100px]' src="	https://developer.apple.com/home/images/tile-ios-18/ios-18-large_2x.webp" alt="" />
                    </div>
                </div>
            </a>
        </li>

        <li className='w-full md:w-[50%] h-[592px] bg-[#fafafa] border-[6px] border-solid border-[#fff]' >
            <a href="#">
                <div className='text-center'>
                    <h3 className='text-[32px] font-bold mt-[50px]'>iPadOS 18</h3>
                    <div className='flex justify-center'>
                    <img className='w-[439px] h-[318px] mt-[100px]' src="https://developer.apple.com/home/images/tile-ipados-18/ipados-18-large_2x.webp" alt="" />
                    </div>
                </div>
            </a>
        </li>

        <li className='w-full md:w-[50%] h-[592px] bg-[#fafafa] border-[6px] border-solid border-[#fff]' >
            <a href="#">
                <div className='text-center'>
                    <h3 className='text-[32px] font-bold mt-[50px]'>MacOS Sequoia</h3>
                    <div className='flex justify-center'>
                    <img className='w-[576px] h-[336px] mt-[100px]' src="https://developer.apple.com/home/images/tile-macos-15/macos-15-large_2x.webp" alt="" />
                    </div>
                </div>
            </a>
        </li>

        <li className='w-full md:w-[50%] h-[592px] bg-[#fafafa] border-[6px] border-solid border-[#fff]' >
            <a href="#">
                <div className='text-center'>
                    <h3 className='text-[32px] font-bold mt-[50px]'>WatchOS 11</h3>
                    <div className='flex justify-center'>
                    <img className='w-[191px] h-[319px] mt-[100px]' src="https://developer.apple.com/home/images/tile-watchos-11/watchos-11-large_2x.webp" alt="" />
                    </div>
                </div>
            </a>
        </li>

        <li className='w-full md:w-[50%] h-[592px] bg-[#fafafa] border-[6px] border-solid border-[#fff]' >
            <a href="#">
                <div className='text-center'>
                    <h3 className='text-[32px] font-bold mt-[50px]'>tvOS 17</h3>
                    <div className='flex justify-center'>
                    <img className='w-[500px] h-[279px] mt-[100px]' src="https://developer.apple.com/home/images/tile-tvos/tvos-device-b.png" alt="" />
                    </div>
                </div>
            </a>
        </li>
      </ul>
    </div>
  )
}

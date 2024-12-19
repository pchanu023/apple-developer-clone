import React from 'react'

export default function () {
  return (
    <div>
      <ul className='flex flex-wrap'>
        <li className=' w-[50%] h-[592px] border-[6px] border-[#ffff] border-solid'>
            <div  className="overflow-hidden text-center bg-[url('https://developer.apple.com/click/images/mcfly/nov24-orange-swift-bird_2x.png')] bg-cover h-full bg-center flex items-end">
                <a href="#" className='w-full bg-black bg-opacity-5 p-10 text-white'>
                    <h3 className='text-[40px] font-bold'>Hello Developer</h3>
                    <p className='text-[21px]'>Read tthis month's guide to the latest developer activities, stories, and news.</p>
                </a>
            </div>
        </li>

        <li className=' w-[50%] h-[592px] border-[6px] border-[#ffff] border-solid'>
            <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-meet-with-apple/d/medium_2x.jpg')] bg-cover h-full bg-center flex items-end">
                <a href="#" className="w-full bg-black bg-opacity-5 p-10 text-white">
                    <h3 className='text-[40px] font-bold'>Hello Developer</h3>
                    <p className='text-[21px]'>Read this month's guide to the latest developer activities, stories, and news.</p>
                </a>
            </div>
        </li>


        

      </ul>
    </div>
  )
}

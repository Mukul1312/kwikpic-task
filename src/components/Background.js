import React from 'react'

const Background = ({top, left}) => {
  return (
    <div className={`absolute left-1/2 top-[${top}] lg:top-0`}>
        <div className='absolute left-[-25vw]'>
            <div className='circle-1 w-[100vw] h-[100vw] lg:w-[80vw] lg:h-[80vw] rounded-full'></div>
        </div>
        <div className='absolute right-[-25vw] '>
            <div className='circle-2 w-[100vw] h-[100vw] lg:w-[80vw] lg:h-[80vw] rounded-full'></div>
        </div>
    </div>
  )
}

export default Background

{/* <div className="z-96 absolute ">
          <div className="opacity-50 w-80 h-80 aspect-square rounded-full blur-[500px] bg-radial from-[#d16f974d] via-[#00000000] to-[#00000000]"></div>
          <div className="opacity-50  w-80 aspect-square rounded-full blur-[500px] bg-radial from-[#5b80c84d] via-[#00000000] to-[#00000000] "></div>
        </div> */}
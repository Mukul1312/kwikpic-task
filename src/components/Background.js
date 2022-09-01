import React from 'react'

const Background = () => {
  return (
    <div className='-mt-[40rem] '>
        <div className='absolute left-[2vw]'>
            <div className='circle-1 w-[80vw] h-[80vw] rounded-full' ></div>
        </div>
        <div className='absolute right-[2vw] '>
            <div className='circle-2 w-[80vw] h-[80vw] rounded-full'></div>
        </div>
    </div>
  )
}

export default Background

{/* <div className="z-96 absolute ">
          <div className="opacity-50 w-80 h-80 aspect-square rounded-full blur-[500px] bg-radial from-[#d16f974d] via-[#00000000] to-[#00000000]"></div>
          <div className="opacity-50  w-80 aspect-square rounded-full blur-[500px] bg-radial from-[#5b80c84d] via-[#00000000] to-[#00000000] "></div>
        </div> */}
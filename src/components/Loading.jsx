import React from 'react';
import loader1 from '/loader1.gif'

function Loading() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-black'>
        <img src={loader1} alt='' />
    </div>
  )
}

export default Loading
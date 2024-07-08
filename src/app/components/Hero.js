import { Content } from 'next/font/google'
import React from 'react'

const Hero = ({content}) => {
  return (
    <div className='w-full h-screen bg-zinc-700 flex justify-center items-center text-4xl'>
        {content}
    </div>
  )
}

export default Hero

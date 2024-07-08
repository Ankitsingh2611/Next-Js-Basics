import Hero from '@/app/components/Hero'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <Hero content={params.task}/>
    </div>
  )
}

export default page

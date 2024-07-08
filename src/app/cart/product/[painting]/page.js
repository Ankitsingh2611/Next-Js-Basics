import Hero from '@/app/components/Hero'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <Hero content={params.painting}/>
    </div>
  )
}

export default page

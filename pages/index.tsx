import *as React from 'react'
import type { NextPage } from 'next'
import Navigation from '../compoenent/Navigation'




const Page:NextPage=()=> {
  const mainRef = React.useRef<null | HTMLElement>(null);

  return (
    <div>
          <Navigation  mainRef={mainRef}/>
    </div>
  )
}

export default Page

import Sidebar from '@/components/Sidebar'
import React from 'react'

export const metadata = {
  title: 'Home | DevNotes',
  description: 'A Minimal Blog for Developers',
}


const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Sidebar/>
      {children}
    
    </>
  )
}

export default layout
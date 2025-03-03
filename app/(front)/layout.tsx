import SiteHeader from '@/components/site-header'
import React from 'react'

export default function FrontLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main className='max-w-6xl mx-auto'>
      
      <SiteHeader />
      {children}
      
    </main>
   
  )
}

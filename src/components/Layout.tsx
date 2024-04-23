import React, { ReactNode } from 'react'

const Layout = ({children, className=""}:{children:ReactNode, className?:string}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32  ${className}`}>
        {children}
    </div>
  )
} 

export default Layout

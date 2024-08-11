import React, { useContext } from 'react'
import { contextProvider } from '../service/ServiceProvider'

const AppName = () => {
    const {appName}=useContext(contextProvider)
  return (
    <div className='text-[32px] capitalize font-bold text-blue-600 text-center py-1 '>{appName}</div>
  )
}

export default AppName
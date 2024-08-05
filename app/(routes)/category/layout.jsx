import React from 'react'
import CategorySidebar from './_components/CategorySidebar'

function layout({children}) {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
        <div className='hidden md:block col-span-1'>
            <CategorySidebar />
        </div>
    <div className='md:col-span-3'>{children}</div>
    </div>
    </div>

    
  )
}

export default layout
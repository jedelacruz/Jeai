import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput} :any) {
  return (
    <div className='p-5 bg-white flex justify-center items-center flex-col shadow-md'>
      <h2 className='text-black text-3xl font-bold'>Browse All Templates</h2>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center border p-2 rounded-md bg-white my-3 w-[50%]'>
            <Search className='text-black'></Search>
            <input className='bg-transparent outline-none' type="text" placeholder='Search' onChange={(event)=> onSearchInput(event.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default SearchSection

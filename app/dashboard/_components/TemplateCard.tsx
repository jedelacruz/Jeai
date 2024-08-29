import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from "next/image"
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className='p-5 shadow-sm rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt ="icon" width={50} height={50} />
        <h2 className='font-medium'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-2'>{item.desc}</p>

      </div>
    </Link>
    
  )
}

export default TemplateCard

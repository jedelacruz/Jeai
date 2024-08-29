"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput : any,
  loading: boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  
  const [formData,setFormatData] = useState<any>();
  
  const handleInputChange = (event:any)=>{
    const {name,value} = event.target;
    setFormatData({...formData, [name] : value})
  }

    const onSubmit = (e:any)=>{
        e.preventDefault();
        userFormInput(formData)
    }
  return (
    <div className='p-5 shadow-lg border rounded-lg bg-white'>
      
      <Image 
        src={selectedTemplate?.icon || "/default-icon.png"} // Provide a fallback URL or image path
        alt="icon-image" 
        height={70} 
        width={70} 
      />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item,index)=>(
            <div className='my-2 flex flex-col gap-2 mb-7'>
                <label>{item.label}</label>
                {item.field == "input" ?
                <Input name={item.name} required={item?.required} onChange={handleInputChange}></Input>    
                : item.field == "textarea" ?
                <Textarea name={item.name} required={item?.required} onChange={handleInputChange}></Textarea>
                : null
            }
            </div>
        ))}
        <Button type='submit' className='w-full py-6' disabled={loading}>{loading&&<Loader2Icon className='animate-spin'></Loader2Icon>}Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection

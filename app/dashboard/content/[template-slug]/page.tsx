"use client"
import React, { useState } from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModel'

interface PROPS{
  params:{
  'template-slug':string
  }
  
}

function CreateNewContent(props:PROPS) {


  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item) =>item.slug== props.params['template-slug'])
  const [loading,setLoading] = useState(false);
const [aiOutput, setAiOutput] = useState<string>('');

  const GenerateAiContent = async(formData:any)=>{
    setLoading(true)
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false)
  }
  return (
    <div className='p-5'> 
      <Link href={"/dashboard"}>
        <Button><ArrowLeft></ArrowLeft></Button>
      </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
        <FormSection selectedTemplate = {selectedTemplate} 
        userFormInput={(v:any)=> GenerateAiContent(v)} loading={loading}></FormSection>
        <div className='col-span-2'>
          <OutputSection aiOutput = {aiOutput}></OutputSection>
        </div>
        
      </div>
    </div>
    
  )
}

export default CreateNewContent

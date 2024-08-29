"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
    const [UserSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
    {
      
    }
        <SearchSection onSearchInput = {(value:string)=>  setUserSearchInput(value)}></SearchSection>
    {
      
    }
        <TemplateListSection userSearchInput = {UserSearchInput}></TemplateListSection>
  </div>
  )
}

export default Dashboard
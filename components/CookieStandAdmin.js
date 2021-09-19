import Head from 'next/head'
import React, { useState } from 'react'
import CookieStandHeader from './Header'
import FormStandHeader from './CreateForm'
import ReportTableStandHeader from './ReportTable'
import FooterStandHeader from './Footer'
import useResource from '../hooks/useResource'

export default function CookieStandAdmin() {
 

  const { resources, loading, createResource, deleteResource,fetchResource } = useResource();
  if (loading) return <p>loading....</p>  
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className='h-20 bg-green-500 '>
      <CookieStandHeader title="Cookie Stand Admin" className='p-5 text-4xl' >
      
        <a > overview</a>
      </CookieStandHeader>
      </div>
      <main>
        
        <FormStandHeader ></FormStandHeader>


    {  resources ? 
    <ReportTableStandHeader > 
      
    </ReportTableStandHeader> :
    <h2>No Cookie Stands Available</h2>
}
       
      </main>
                             
      <FooterStandHeader >

      </FooterStandHeader>
    </div>
  )
}


import Head from 'next/head'
import React, { useState } from 'react'
import CookieStandHeader from './Header'
import FormStandHeader from './CreateForm'
import ReportTableStandHeader from './ReportTable'
import FooterStandHeader from './Footer'
export default function CookieStandAdmin() {
  const [Cookie , setCookie ] = useState([]);
   

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
        
        <FormStandHeader setCookie={ setCookie }></FormStandHeader>


    { Cookie.length ? 
    <ReportTableStandHeader data = {Cookie}> 
      
    </ReportTableStandHeader> :
    <h2>No Cookie Stands Available</h2>
}
       
      </main>
                             
      <FooterStandHeader value = {Cookie}>

      </FooterStandHeader>
    </div>
  )
}
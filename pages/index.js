import Head from 'next/head'
import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import axios from 'axios'
import useSWR from 'swr'

export default function Home() {

  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();


 
  return (
    <div>

  {user ?
    < CookieStandAdmin> </CookieStandAdmin>
    : < LoginForm login = {login}></LoginForm>
  }
  </div>
  )
}


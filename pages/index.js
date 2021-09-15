import Head from 'next/head'
import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
export default function Home() {

  const { user, login, logout } = useAuth();

console.log(user);

  return (
    <div>
  {user ?
    < CookieStandAdmin> </CookieStandAdmin>
    : < LoginForm login = {login}></LoginForm>
  }
  </div>
  )
}


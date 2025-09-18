import React, { useEffect } from 'react'
import Page from '../components/Layout/Page.jsx'
export default function Auth(){
  useEffect(()=>{ if(window.netlifyIdentity){ window.netlifyIdentity.open('login') }},[])
  return <Page title="Sign In">Opening Netlify Identity…</Page>
}

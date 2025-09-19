import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../store/store'

export default function Auth(){
  const nav = useNavigate()
  const { login, termsAccepted, acceptTerms } = useApp()
  const [isSignup, setIsSignup] = useState(true)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')

  const onSubmit = (e)=>{
    e.preventDefault()
    if (isSignup && !termsAccepted){ alert('Please accept Terms & Privacy.'); return }
    login({ email, name: name||email.split('@')[0], subscribed: false })
    nav('/')
  }

  return (
    <div className="grid">
      <div className="col-6 card">
        <div className="badge">{isSignup?'Create account':'Sign in'}</div>
        <form onSubmit={onSubmit} style={{display:'grid', gap:10, marginTop:10}}>
          {isSignup && <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>}
          <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" placeholder="Password" type="password" value={pwd} onChange={e=>setPwd(e.target.value)} />
          {isSignup && (
            <label style={{display:'flex', gap:8, alignItems:'center'}}>
              <input type="checkbox" checked={termsAccepted} onChange={e=>acceptTerms(e.target.checked)} />
              I accept the <Link to="/terms" target="_blank">Terms</Link> and <Link to="/privacy" target="_blank">Privacy Policy</Link>.
            </label>
          )}
          <div style={{display:'flex', gap:8}}>
            <button className="btn" type="submit">{isSignup?'Create account':'Sign in'}</button>
            <button type="button" className="btn secondary" onClick={()=>setIsSignup(!isSignup)}>{isSignup?'Have an account? Sign in':'Need an account? Sign up'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

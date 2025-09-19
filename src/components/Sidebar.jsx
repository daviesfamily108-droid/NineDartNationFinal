import { Link, useLocation } from 'react-router-dom'

const NavItem = ({ to, children })=>{
  const loc = useLocation()
  const active = loc.pathname===to
  return (
    <Link className="navbtn" style={{background: active?'#1b2c4d':'#0f1b2a'}} to={to}>{children}</Link>
  )
}

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">🎯 Nine Dart Nation</div>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/online">Online</NavItem>
      <NavItem to="/offline">Offline</NavItem>
      <NavItem to="/friends">Friends</NavItem>
      <NavItem to="/stats">Stats</NavItem>
      <NavItem to="/settings">Settings</NavItem>
      <div style={{marginTop:'auto'}}>
        <a className="btn secondary" href="https://discord.gg/whu3ksQn" target="_blank">Join our Discord</a>
      </div>
    </aside>
  )
}

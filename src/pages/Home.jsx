import { useApp } from '../store/store'
import { Link } from 'react-router-dom'

export default function Home(){
  const { stats } = useApp()
  return (
    <div className="grid">
      <div className="col-12">
        <div className="badge">Welcome back</div>
      </div>
      <div className="col-4"><Link to="/online" className="card">Play Online</Link></div>
      <div className="col-4"><Link to="/offline" className="card">Offline Mode</Link></div>
      <div className="col-4"><Link to="/friends" className="card">Friends</Link></div>
      <div className="col-12 card" style={{marginTop:10}}>Most played: Around the Clock — 52 minutes</div>
    </div>
  )
}

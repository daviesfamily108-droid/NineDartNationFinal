import { useState } from 'react'
import { useApp } from '../store/store'
import { Tabs } from '../components/Tabs'

export default function Stats(){
  const [tab, setTab] = useState('overview')
  const { stats } = useApp()
  return (
    <div>
      <Tabs value={tab} onChange={setTab} items={[
        {value:'overview', label:'Overview'},
        {value:'leaderboards', label:'Leaderboards'},
        {value:'history', label:'Match History'},
        {value:'achievements', label:'Achievements'}
      ]}/>

      {tab==='overview' && (
        <div className="grid">
          <div className="col-4 card"><div className="kpi">3-Dart Avg (monthly)</div><h2>{stats.monthly3DAvg.toFixed(2)}</h2></div>
          <div className="col-4 card"><div className="kpi">Games Played</div><h2>{stats.gamesPlayed}</h2></div>
          <div className="col-4 card"><div className="kpi">Achievements</div><h2>{stats.achievements.filter(a=>a.earned).length}</h2></div>
        </div>
      )}
      {tab==='leaderboards' && (
        <div className="card">
          {stats.leaderboards.map((r,i)=>(<div key={i} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #1f2d4a'}}>
            <div>{i+1}. {r.user}</div><div>{r.avg}</div>
          </div>))}
        </div>
      )}
      {tab==='history' && (
        <div className="card">
          {stats.history.length===0 ? 'No games recorded yet.' : stats.history.map((h, i)=>(<div key={i}>{h}</div>))}
        </div>
      )}
      {tab==='achievements' && (
        <div className="card">
          {stats.achievements.map(a=>(<div key={a.id} style={{display:'flex', justifyContent:'space-between', padding:'8px 0'}}>
            <div>{a.name}</div><div>{a.earned?'✓':'—'}</div>
          </div>))}
        </div>
      )}
    </div>
  )
}

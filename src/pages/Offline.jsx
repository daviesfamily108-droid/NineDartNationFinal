import React, { useMemo, useState } from 'react'
import ScoreCard from '../components/ScoreCard.jsx'
import { threeDartAvg, nextStarter } from '../utils/scoring.js'
import { say } from '../utils/tts.js'

export default function Offline(){
  const [remainingYou,setRemainingYou] = useState(501)
  const [remainingAI,setRemainingAI] = useState(501)
  const [thrower,setThrower] = useState('You')
  const [legs,setLegs] = useState({you:0, ai:0, target:3})
  const [youVisits,setYouVisits] = useState([])
  const [aiVisits,setAiVisits] = useState([])
  const [input,setInput] = useState('')

  const avgYou = useMemo(()=>threeDartAvg(youVisits),[youVisits])
  const avgAI  = useMemo(()=>threeDartAvg(aiVisits),[aiVisits])

  function enter(s){
    const v = Math.max(0, Math.min(180, Number(s)))
    if(isNaN(v)) return
    if(thrower==='You'){
      const next = Math.max(0, remainingYou - v)
      setRemainingYou(next)
      setYouVisits(x=>[...x,v])
      if(next===0){
        say('Game shot!')
        setLegs(l=>({ ...l, you:l.you+1 }))
        resetLeg(nextStarter(thrower))
        return
      }
      setThrower('AI Bot')
    }else{
      const next = Math.max(0, remainingAI - v)
      setRemainingAI(next)
      setAiVisits(x=>[...x,v])
      if(next===0){
        say('Leg to AI')
        setLegs(l=>({ ...l, ai:l.ai+1 }))
        resetLeg(nextStarter(thrower))
        return
      }
      setThrower('You')
    }
  }

  function resetLeg(nextStart='You'){
    setRemainingYou(501); setRemainingAI(501)
    setYouVisits([]); setAiVisits([])
    setThrower(nextStart)
  }

  const manualEnter = (e)=>{ e.preventDefault(); enter(input); setInput('') }

  return (
    <div className="grid">
      <div className="card"><strong>501 · Best of {legs.target} (First to {Math.ceil(legs.target/2)})</strong></div>
      <div className="cards">
        <ScoreCard title={thrower==='You'?'YOU':' '} player="DartsWithG" avg={avgYou} bestLeg={null} hits={[180,140,100,81]} remaining={remainingYou} lastVisits={youVisits.slice(-3)} legs={{won:legs.you,total:Math.ceil(legs.target/2)}} />
        <ScoreCard title={thrower==='AI Bot'?'THROWING':' '} player="AI Bot" avg={avgAI} bestLeg={null} hits={[180,140,100,81]} remaining={remainingAI} lastVisits={aiVisits.slice(-3)} legs={{won:legs.ai,total:Math.ceil(legs.target/2)}} />
      </div>

      <div className="card">
        <div>Enter score for <strong>{thrower}</strong></div>
        <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:8}}>
          {[180,140,100,81,60,45,41,26,20,1].map(n=>(
            <button key={n} className="btn" onClick={()=>enter(n)}>{n}</button>
          ))}
          <button className="btn ghost" onClick={()=>enter(0)}>No Score</button>
          <form onSubmit={manualEnter}>
            <input className="kbd" placeholder="Type score…" value={input} onChange={e=>setInput(e.target.value)} style={{marginLeft:8,height:36}} />
          </form>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'
import ScoreCard from '../components/ScoreCard'

export default function Offline(){
  const [remaining, setRemaining] = useState(501)
  const onScore = (val)=> setRemaining(r => Math.max(0, r - val))
  return (
    <div className="grid">
      <div className="col-12 card">501 · Best of 5 (First to 3)</div>
      <div className="col-6"><ScoreCard player="DartsWithG" remaining={remaining} onScore={onScore}/></div>
      <div className="col-6"><ScoreCard player="AI Bot" remaining={remaining} onScore={onScore}/></div>
    </div>
  )
}

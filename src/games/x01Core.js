export function createMatch({ startScore=501, legsToWin=3, players=[{id:'you',name:'You'},{id:'ai',name:'AI'}], starterIndex=0, doubleOut=false }){
  return {
    cfg:{ startScore, legsToWin, doubleOut },
    players: players.map(p=>({...p, remaining:startScore, darts:0, scored:0, legs:0, bestLeg:0, lastVisits:[] })),
    leg:1,
    active: starterIndex % players.length,
    history:[],
    complete:false,
    winnerId:null,
  }
}
export function isCheckoutAllowed(remaining,sum,{doubleOut}){
  if(remaining-sum!==0) return true
  if(!doubleOut) return true
  return false
}
export function applyVisit(match, pid, scores){
  if(match.complete) return match
  const m = structuredClone(match)
  const p = m.players[pid]
  const sum = scores.reduce((a,b)=>a+b,0)

  let bust=false
  if(sum>p.remaining) bust=true
  if(!bust && p.remaining - sum === 1) bust=true
  if(!bust && !isCheckoutAllowed(p.remaining,sum,m.cfg)) bust=true

  if(!bust){
    p.remaining -= sum
    p.scored += sum
    p.darts += scores.length
    p.lastVisits = [{scores,sum}, ...p.lastVisits].slice(0,6)
    if(p.remaining===0){
      p.legs += 1
      p.bestLeg = p.bestLeg===0 ? p.darts : Math.min(p.bestLeg, p.darts)
      if(p.legs >= m.cfg.legsToWin){
        m.complete=true; m.winnerId=p.id ?? pid
      }else{
        m.players.forEach(pl=>{ pl.remaining=m.cfg.startScore; pl.darts=0; pl.scored=0; pl.lastVisits=[] })
        m.leg += 1
        m.active = (m.leg - 1) % m.players.length
      }
    }else{
      m.active = (m.active + 1) % m.players.length
    }
  }else{
    p.lastVisits = [{scores,sum,bust:true}, ...p.lastVisits].slice(0,6)
    m.active = (m.active + 1) % m.players.length
  }

  m.history.unshift({ pid, scores, sum, bust, totalAfter: m.players[pid].remaining, leg:m.leg })
  return m
}
export function threeDartAverage(p){ return p.darts===0 ? 0 : (p.scored/p.darts)*3 }

export function compute3DAvg(throws){
  // throws is array of per-visit sum (0..180)
  if(!throws || throws.length===0) return 0
  const darts = throws.length*3
  const pts = throws.reduce((a,b)=>a+b,0)
  return +(pts / (darts/3)).toFixed(2)
}
export function nextToThrow(idx, total=2){ return (idx+1)%total }
export function isValidCheckout(current, visit){
  const r = current - visit
  if(r===0) return true
  if(r>1) return true
  return false
}

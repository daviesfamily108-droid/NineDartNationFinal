export function threeDartAvg(throws){
  if(!throws.length) return 0
  const total = throws.reduce((a,b)=>a+b,0)
  const darts = throws.length*3
  return (total/darts)*3
}
export function nextStarter(curr){ return curr==='You'?'AI Bot':'You' }
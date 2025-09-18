import { useState } from 'react'
export default function Tabs({items}){
  const [i,setI]=useState(0)
  return <div>
    <div className='row' style={{gap:6}}>{items.map((it,idx)=>(<button key={idx} className={'btn '+(i===idx?'':'secondary')} onClick={()=>setI(idx)}>{it.label}</button>))}</div>
    <div style={{marginTop:12}}>{items[i]?.content}</div>
  </div>
}

import { useEffect, useState } from 'react'
export default function useLocalStorage(key, initial){
  const [v,setV] = useState(()=>{
    try{ const raw = localStorage.getItem(key); return raw? JSON.parse(raw): initial }
    catch(e){ return initial }
  })
  useEffect(()=>{ localStorage.setItem(key, JSON.stringify(v)) },[key,v])
  return [v,setV]
}

import { useEffect, useRef } from 'react'
export default function useInactivityTimer(ms, fn){
  const ref = useRef()
  useEffect(()=>{
    const bump = ()=>{ clearTimeout(ref.current); ref.current=setTimeout(fn, ms) }
    ;['click','keydown','mousemove','touchstart'].forEach(ev=>window.addEventListener(ev,bump))
    bump()
    return ()=>{ ['click','keydown','mousemove','touchstart'].forEach(ev=>window.removeEventListener(ev,bump)); clearTimeout(ref.current) }
  },[ms,fn])
}

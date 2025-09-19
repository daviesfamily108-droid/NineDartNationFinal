export const load = (k,def)=>{ try{ return JSON.parse(localStorage.getItem(k)) ?? def }catch{ return def } }
export const save = (k,v)=>localStorage.setItem(k,JSON.stringify(v))
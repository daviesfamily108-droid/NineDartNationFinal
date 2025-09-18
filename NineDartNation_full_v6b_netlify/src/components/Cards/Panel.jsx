import React from 'react'
export default function Panel({title, children}){
  return <div className="panel"><div style={{marginBottom:10,fontWeight:700}}>{title}</div>{children}</div>
}

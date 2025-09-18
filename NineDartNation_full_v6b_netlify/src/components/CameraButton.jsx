import React, { useState } from 'react'
import QRDialog from './QRDialog.jsx'

export default function CameraButton(){
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="ghost" onClick={()=>setOpen(o=>!o)}>+ Camera</button>
      {open && <QRDialog onClose={()=>setOpen(false)}/>}
    </>
  )
}

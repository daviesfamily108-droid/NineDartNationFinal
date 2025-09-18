export default function Modal({open,onClose,children,width=640}){
  if(!open) return null
  return <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.6)',display:'grid',placeItems:'center',zIndex:50}} onClick={onClose}>
    <div className='card' style={{width, maxWidth:'95vw'}} onClick={e=>e.stopPropagation()}>{children}</div>
  </div>
}

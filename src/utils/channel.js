export function openLocalRoom(roomId) {
  const chName = `ndn-room-${roomId}`
  const bc = 'BroadcastChannel' in window ? new BroadcastChannel(chName) : null

  const subs = new Set()
  function onMessage(ev) { subs.forEach(fn => fn(ev.data)) }
  if (bc) bc.onmessage = onMessage
  else window.addEventListener('storage', e => {
    if (e.key === chName && e.newValue) onMessage({ data: JSON.parse(e.newValue) })
  })

  return {
    send(data) { if (bc) bc.postMessage(data); else localStorage.setItem(chName, JSON.stringify(data)) },
    subscribe(fn){ subs.add(fn); return ()=>subs.delete(fn) },
    close(){ if (bc) bc.close() }
  }
}

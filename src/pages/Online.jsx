export default function Online(){
  return (
    <div className="grid">
      <div className="col-12 card">
        <div className="badge">Create Game +</div>
        <div style={{marginTop:10, display:'flex', gap:8, flexWrap:'wrap'}}>
          <select className="input"><option>X01</option><option>Killer</option><option>Around the Clock</option><option>Shanghai</option></select>
          <select className="input"><option>501</option><option>701</option><option>301</option></select>
          <select className="input"><option>Best of 5</option><option>Best of 3</option><option>Best of 7</option></select>
          <select className="input"><option>Sets 1</option><option>Sets 3</option><option>Sets 5</option></select>
          <button className="btn">Create Room</button>
        </div>
      </div>
      <div className="col-12 card">World Lobby — no rooms yet</div>
    </div>
  )
}

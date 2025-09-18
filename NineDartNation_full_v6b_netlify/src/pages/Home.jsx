import React from 'react'
import Page from '../components/Layout/Page.jsx'
import Panel from '../components/Cards/Panel.jsx'
import StatCard from '../components/Cards/StatCard.jsx'
import CameraButton from '../components/CameraButton.jsx'
import { useStore } from '../state/store.jsx'

export default function Home(){
  const { stats } = useStore()
  return (
    <Page title="Welcome back, DartsWithG!" right={<CameraButton/>}>
      <div className="grid cols-3">
        <Panel title="Quick Access">
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <a className="kbd" href="#/online">Play Online</a>
            <a className="kbd" href="#/offline">Offline Mode</a>
            <a className="kbd" href="#/stats">Stats</a>
          </div>
        </Panel>
        <Panel title="Best 3-Dart Avg"><StatCard title="Monthly" value={stats.monthly3d.toFixed(2)} /></Panel>
        <Panel title="Friends (quick)"><div className="muted">Challenge friends from the Friends page.</div></Panel>
      </div>
    </Page>
  )
}

import React from 'react'
import Page from '../components/Layout/Page.jsx'
import X01Board from '../components/X01Board/index.jsx'
import CameraPanel from '../components/CameraPanel.jsx'

export default function Offline(){
  return (
    <Page title="Offline" right={null}>
      <div className="grid cols-2">
        <X01Board start={501} legsToWin={3} players={['DartsWithG','AI Bot']}/>
        <CameraPanel/>
      </div>
    </Page>
  )
}

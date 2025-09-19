import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import Online from './pages/Online'
import Offline from './pages/Offline'
import Friends from './pages/Friends'
import Stats from './pages/Stats'
import Settings from './pages/Settings'
import Auth from './pages/Auth'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <div className="layout">
      <Sidebar/>
      <div className="content">
        <TopBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/online" element={<Online/>}/>
            <Route path="/offline" element={<Offline/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/stats" element={<Stats/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

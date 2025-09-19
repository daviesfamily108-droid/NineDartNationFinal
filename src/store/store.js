import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const defaultStats = {
  monthly3DAvg: 0,
  gamesPlayed: 0,
  achievements: [
    { id: 'first180', name: 'First 180', earned: false },
    { id: 'hatTrick', name: 'Hat-trick', earned: false },
  ],
  history: [],
  leaderboards: [
    { user: 'DartsWithG', avg: 72.3 },
    { user: 'Robin', avg: 68.4 },
    { user: 'Alex', avg: 66.1 },
  ]
}

export const useApp = create(persist((set, get) => ({
  user: null, // {email, name, subscribed}
  termsAccepted: false,
  ui: { cameraSaved: false },
  stats: defaultStats,

  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  acceptTerms: (ok) => set({ termsAccepted: ok }),

  saveCamera: () => set({ ui: { ...get().ui, cameraSaved: true } }),

  recordVisit: (entry) => set({ stats: { ...get().stats, history: [entry, ...get().stats.history].slice(0,50) } }),

  setSubscribed: (flag) => set({ user: { ...(get().user||{}), subscribed: flag } })
}), { name: 'ndn-state' }))

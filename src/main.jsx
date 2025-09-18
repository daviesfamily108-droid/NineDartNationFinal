import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './state/store.jsx'
import ProdErrorBoundary from './components/ProdErrorBoundary';

// ...
root.render(
  <StrictMode>
    <HashRouter>
      <ProdErrorBoundary>
        <App />
      </ProdErrorBoundary>
    </HashRouter>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
)

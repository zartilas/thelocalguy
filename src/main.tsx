// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { NotFound } from './NotFound'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </Provider>
    </StrictMode>,
)
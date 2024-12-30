import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout>
            <App />
        </Layout>
    </BrowserRouter>
)

import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { useLocale } from '@/locale'
import './theme/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

useLocale()

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

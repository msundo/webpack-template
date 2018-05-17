import 'nodelist-foreach-polyfill'
import '../styles/main.scss'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
  }
}

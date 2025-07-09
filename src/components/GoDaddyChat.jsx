// src/components/GoDaddyChat.jsx
import { useEffect } from 'react'

export default function GoDaddyChat() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.chatlablive.com/your-unique-path/chat.js'
    script.async = true
    script.setAttribute('data-site-id', 'YOUR_WIDGET_ID')
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}

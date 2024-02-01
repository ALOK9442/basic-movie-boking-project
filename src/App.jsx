import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        outerAlpha={0.2}
        innerScale={0.7}
        color="255, 95, 61"
        showSystemCursor={false}
      />
      <Outlet />
    </div>
  )
}

export default App

import './App.css'
import { Routes, Route } from 'react-router-dom'
import ChatScreen from './pages/chatBox/ChatScreen'
import EnetrixScreen from './pages/tela-inicial/EnetrixScreen'

function App() {

  return (
    <Routes>
      <Route path="/" element={<EnetrixScreen />} />
      <Route path="/chat" element={<ChatScreen />} />
    </Routes>
  )
}

export default App
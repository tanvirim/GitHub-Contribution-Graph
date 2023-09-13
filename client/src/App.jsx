import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'




function App() {


  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  )
}

export default App

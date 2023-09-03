import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'

function App() {
  return (
    <div className="App h-screen w-full">
      <BrowserRouter>
        <div className="pages h-screen w-full">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/card' element={<Card/>}/>
            {/* <Route path='/card/new' element={<NewCard/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

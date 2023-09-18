import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const mainbgColor = "#FAFAFB"

  return (
    <div className="App h-screen w-full">
      <BrowserRouter>
        <div className="pages h-screen w-full" style={{backgroundColor: mainbgColor}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            {/* <Route path='/card/new' element={<NewCard/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

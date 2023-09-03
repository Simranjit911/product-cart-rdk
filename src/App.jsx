
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Sidebar from './component/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<Home/>}/>
    <Route path='/cart' element={<Sidebar/>}/>
     </Routes>
    </div>
  )
}

export default App
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App


import { Route,Routes } from 'react-router'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' />
      </Routes>
    </>
  )
}

export default App

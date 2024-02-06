
import { Route,Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Select from './components/Select'

function App() {



  return (
    <>
      <Select />

      <Header/>

      <Routes>
        <Route path='/' />
      </Routes>
    </>
  )
}


export default App

import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import AddEmployee from './components/ListEmployeeComponent/addEmployee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        {/* Header */}
        <HeaderComponent />
        <Routes>
          <Route path = '/' element = {<ListEmployeeComponent/>} /> 
          <Route path='/add_employee' element = {<AddEmployee />} />     
        </Routes>
        {/* Body */}
        
        
        {/* Footer */}
        <FooterComponent />
      </BrowserRouter>
    </div>
  )
}

export default App
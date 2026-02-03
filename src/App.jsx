import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Header */}
      <HeaderComponent />

      {/* Body */}
      <main className="container my-4 flex-grow-1">
        <ListEmployeeComponent />
      </main>

      {/* Footer */}
      <FooterComponent />

    </div>
  )
}

export default App
import './App.css'
import "./assets/compiled/css/app.css"
import "./assets/compiled/css/app-dark.css"
import "./assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js"
//import "./assets/extensions/apexcharts/apexcharts.min.js"
//import "./assets/static/js/pages/dashboard.js"
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <Home />
    </>
  )
}

export default App

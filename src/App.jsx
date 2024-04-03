import Home from "./components/Home"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import './App.css'

function App() {
  return (
    <div className="grid-container">
      <Header />
      <SideBar />
      <Home />
    </div>
  )
}
export default App
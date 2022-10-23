
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import ProjectsContaines from "./components/ProjectsContainer"

import "./styles/components/app.sass"
import Footer from "./components/Footer"

function App() {
  
  return (
    <div id="portfolio"> 
      <h1 className="name">Denilson Santos</h1>
      <Sidebar/>
      <MainContent/>
      <ProjectsContaines/>
      <Footer/>
    </div>
  )
}

export default App

import AddClientModal from "../components/AddClientModal"
import AddProjectModal from "../components/AddProjectModal"
import Clients from "../components/Clients"
import Projects from "../components/Projects"


const Home = () => {
  return (
    <div className="container pt-4">
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <div className="pt-2">
        <h2>Projects</h2>
        <Projects />
      </div>
      <div className="pt-2">
        <h2>Clients</h2>
        <Clients />
      </div>
    </div>
  )
}

export default Home
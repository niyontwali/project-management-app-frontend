import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <div className="navbar theme-navbar mb-4 p-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Project Management System
          </Link>
        </div>
      </div>      
    </nav>
  )
}

export default Header
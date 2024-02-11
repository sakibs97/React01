import "./navbar.css"
import logo from "../../assets/Logo.jpg"


export const Navbar = () => {
  return (
   <nav>
        <div className="container">
            <div className="nav_main">
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                    </div>                
                <div className="menu">
                    <ul>                                      
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        
                    </ul>
                </div>                
            </div>
        </div>
    </nav>
  )
}

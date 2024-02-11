import BottomNav from "./Bottomnav"
import Topnav from "./Topnav"
import BottomNavLines from "./Bottomnavlines"
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav className="navbar-container">
            <Topnav/>
            <BottomNav/>
            <BottomNavLines/>
        </nav>
    )   
}
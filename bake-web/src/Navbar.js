import logoBake from './bake-logo-good.png';
import "./index.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const mainTitle = " Get - Baking ";
    return (
        <div className="Navbar">
          

            <img src={logoBake} className="logoBake" alt="logo"></img>
            <h1>{mainTitle}</h1>

            <nav className="navbar">
                <div className="mainNavigation">
                    <ul className="Navbar">
                        <li className="NavbarI"><Link to="/"><b>Home</b></Link></li>
                        <li className="NavbarI"><Link to="/allrecipes"><b>View Recipes</b></Link></li>     
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

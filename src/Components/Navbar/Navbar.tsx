import { Fragment } from "react/jsx-runtime";
import monImage from "../../assets/images/logo.png";
import { Link } from "react-router";
import Bouton from "../Bouton/Bouton";
import './Navbar.css'

export default function Navbar() {
  return (
    <Fragment>
        <header>
            <div className="nav-container">
                <div className="logo">
                    <img src={monImage} alt="" width={70} />
                </div>

                <div className="nav-items">
                    <nav>
                        <ul>
                            <li>
                                <Link to={''} className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">A propos</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">Nos services</Link>
                            </li>
                            <li>
                                <Link to={''} className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                <Bouton label="Se connecter"/>
                </div>
            </div>
        </header>
    </Fragment>
  )
}

import { Fragment } from "react/jsx-runtime";
import Navbar from "../../Components/Navbar/Navbar";
import "./Welcome.css";
import { Link } from "react-router";
import About from "./About";
export default function Welcome() {
  return (
    <Fragment>
      <Navbar />
      <div className="banner-container">
        <div className="text-banner">
          <h2 className="text-tin">
            Logiciel de
            <strong> gestion des données des patiens dans les hopitaux</strong>
          </h2>

          <div className="ctn-container">
            <div className="free-div">
              <Link to={""} className="free-text">
                {" "}
                Tester gratuitement
              </Link>
            </div>
            <div className="contact-div">
              <Link to={""} className="contact-text">
                {" "}
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

      </div>
        <About />

    </Fragment>
  );
}

import "./About.css";
import MontImage from "../../assets/images/about.jpg";
import { Link } from "react-router";
import "aos/dist/aos.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="photo-cont">
        <img src={MontImage} alt="" width={400} height={500} />
      </div>
      <div className="text-cont">
        <h2>
          Ce que vous <br /> pouvez faire ? <br /> c'est ce que vous <br />{" "}
          demander ?
        </h2>

        <div className="text-cont">
          <p>Avoir une vue claire des données de vos patients</p>

          <p>
            Avoir la version numerique des dossiers médicaux de vos patients
          </p>

          <p>
            Tranférez facilement vos patients en toute sécurité avec leurs
            dossiers médicaux
          </p>
        </div>

        <div>
          <p>Il faudra environ un centaine de lignes supplémentaire</p>
        </div>

        <div className="ctn-about-container">
          <div className="free-about-div">
            <Link to={""} className="free-about-text">
              {" "}
              Tester gratuitement
            </Link>
          </div>
          <div className="contact-about-div">
            <Link to={""} className="contact-about-text">
              {" "}
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

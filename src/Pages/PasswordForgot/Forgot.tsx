import { Fragment } from "react/jsx-runtime";
import Input from "../../Components/Input/Input";
import { Link } from "react-router";
import Bouton from "../../Components/Bouton/Bouton";
import monImage from "../../assets/images/logo.png";

export default function Forgot() {
  return (
    <Fragment>
      <h1>Login</h1>
      <div className="grid-container">
        <div className="conatainer_princ">
              <img src={monImage} alt="" width={"70"} />
            <div className="header-cont">
            <div>
            </div>
            <div>
              <h1>Réinitialiser le mot de passe</h1>
            </div>
          </div>
          <Input
            label="Email"
            reference="email"
            placeholder="Votre email"
            type="email"
          />

          <div className="cover">
            <div>
              <Bouton label="Envoyer le code" />
            </div>
            <div className="btn-cover">
              <Link to={"/login"}>Se connecter</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

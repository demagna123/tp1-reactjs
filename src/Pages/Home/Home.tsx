import { Fragment, useState } from "react";
import Input from "../../Components/Input/Input";
import monImage from "../../assets/images/logo.png";
import Bouton from "../../Components/Bouton/Bouton";
import "./Home.css";
import H1 from "../../Components/H1/H1";
import { Link, useNavigate } from "react-router";
import { z } from "zod";

// type projectResponse = {
//   data: [
//     projectType
//   ]
// }

const registerSchema = z.object({
  name: z.string().min(5, "Le nom doit contenir au moins 5 caractères"),
  email: z.email("Veuillez entrer une adresse email valide"),
  telephone: z.string().min(8, "Le numero doit être un nombre positif"),
  password: z.string().min(8, "Le mot de passe doit être un nombre positif"),
});

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successmessage, setSuccessMessage] = useState<string>("");


  const [errors, setErrors] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
  });

  const navigate = useNavigate();

  const onFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTelephone(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formulaire soumis");

    const result = registerSchema.safeParse({
      name,
      email,
      telephone,
      password,
    });
    if (!result.success) {
      const newErrors: typeof errors = {
        name: "",
        email: "",
        telephone: "",
        password: "",
      };

      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof typeof newErrors;
        newErrors[field] = err.message;
      });

      // console.log(JSON.parse(result.error))

      // setErrors(newErrors);
      return;
    }

    // setErrors({ name: "", email: "", telephone: "", password: "" });
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    navigate("/profile");
  };

  

  return (
    <Fragment>
      {/* <p>Nom: {name}</p>
      <p>Email: {email}</p>
      <p>Tel: {telephone}</p>
      <p>Password: {password}</p> */}

      {/* {projects.map((project, index) => {
        return <div key={index}>{project.name}</div>;
      })} */}

      <div>
        <Link to={'projects'}>Liste des projets</Link>
      </div>

      <div className="grid-container">
        <div className="conatainer_princ">
          <div className="header-cont">
            <div>
              <img src={monImage} alt="" width={"70"} />
            </div>
            <div>
              <H1>Inscription</H1>
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <Input
              label="Nom et prénom"
              reference="fullname"
              placeholder="Saisir votre nom et prénom"
              type="text"
              value={name}
              onChange={onFullNameChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <Input
              label="Email"
              reference="email"
              placeholder="Votre email"
              type="email"
              value={email}
              onChange={onEmailChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <Input
              label="Téléphone"
              reference="telephone"
              placeholder="Votre téléphone"
              type="number"
              value={telephone}
              onChange={onTelephoneChange}
            />
            {errors.telephone && (
              <p style={{ color: "red" }}>{errors.telephone}</p>
            )}
            <Input
              label="Mot de passe"
              reference="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <div className="cover">
              <div>
                <Bouton disabled={isLoading} label="Valider" />
              </div>
              <div>
                <Link to={"/login"}>Se connecter</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

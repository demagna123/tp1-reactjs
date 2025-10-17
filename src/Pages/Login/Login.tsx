import { Link, useNavigate } from "react-router";
import Input from "../../Components/Input/Input";
import { Fragment } from "react/jsx-runtime";
import monImage from "../../assets/images/logo.png";
import Bouton from "../../Components/Bouton/Bouton";
import { useEffect, useState } from "react";
import { z } from "zod";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const registerSchema = z.object({
    email: z.string().email("Veuillez entrer une adresse email valide"),
    password: z.string().min(8, "Le mot de passe doit être un nombre positif"),
  });
  const navigate = useNavigate();

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation avec Zod
    const result = registerSchema.safeParse({ email, password });

    if (!result.success) {
      const newErrors: typeof errors = { email: "", password: "" };
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof typeof newErrors;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (storedEmail && storedPassword) {
      if (storedEmail === email && storedPassword === password) {
        // localStorage.removeItem("userEmail");
        // localStorage.removeItem("userPassword");
        setErrors({ email: "", password: "" });
        navigate("/profile");
      } else {
        setErrors({
          email: "",
          password: "Email ou mot de passe incorrect",
        });
      }
    } else {
      setErrors({
        email: "",
        password: "Aucun utilisateur enregistré.",
      });
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);
  return (
    <Fragment>
      {/* <h1>Login</h1> */}
      <div className="grid-container">
        <div className="conatainer_princ">
          <div className="header-cont">
            <div>
              <img src={monImage} alt="" width={"70"} />
            </div>
            <div>
              <h1>Login</h1>
            </div>
          </div>

          <form onSubmit={onSubmit}>
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
              label="password"
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
                <Bouton label="Se connecter" />
              </div>
              <div className="btn-cover">
                <Link to={"/"}>S'inscrire</Link>
                <Link to={"/forgot"}>mot de passe oubliez</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

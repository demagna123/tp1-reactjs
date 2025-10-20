import { Fragment } from "react/jsx-runtime";
import Input from "../../Components/Input/Input";
import { useState } from "react";
import Bouton from "../../Components/Bouton/Bouton";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AddProject() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
    const navigate = useNavigate();
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);
  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    setStatus(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://focuspro.dayal-enterprises.com/public/api/projects",
        {
          name,
          description,
          status,
        }
      );
    
      navigate('/')

      setName("");
      setDescription("");
      setStatus("");

      console.log(response.data);
    } catch (error) {
      console.log("errrorr");
    }
  };
  return (
    <Fragment>
      <h2>Creer un projets</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nom du projet"
          type="text"
          placeholder="Veiller saisir le nom du projet"
          reference="name"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          label="Description"
          type="text"
          placeholder="Veiller saisir une description"
          reference="description"
          value={description}
          onChange={handleChangeDescription}
        />
        <Input
          label="statut du projet"
          type="text"
          placeholder="Veiller saisir le statut du projet"
          reference="status"
          value={status}
          onChange={handleChangeStatus}
        />

        <Bouton label="Envoyer" />
      </form>
    </Fragment>
  );
}

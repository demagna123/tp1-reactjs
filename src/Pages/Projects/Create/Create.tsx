import { useNavigate } from "react-router";
import Input from "../../../Components/Input/Input";
import { useState } from "react";
import Bouton from "../../../Components/Bouton/Bouton";
import { projectApi } from "../../../api/projects/Liste";

export default function Create() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);
  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    setStatus(event.target.value);

  const goToBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.set("name", name);
      formData.set("description", description);
      formData.set("status", status);

      await projectApi.create(formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button type="button" onClick={goToBack}>
        Retour
      </button>
      <h1>Creer un projet</h1>

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

    <select name="status" id="" value={status} onChange={() =>handleChangeStatus}>
        <option value="en_cours"> En cours</option>
        <option value="terminer"> Terminer</option>
    </select>
        <Input
          label="statut du projet"
          type="text"
          placeholder="Veiller saisir le statut du projet"
          reference="status"
          value={status}
          onChange={handleChangeStatus}
        />

        <Bouton label="Creer" />
      </form>
    </div>
  );
}

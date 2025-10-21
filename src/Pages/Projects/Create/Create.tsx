import { useNavigate } from "react-router";
import Input from "../../../Components/Input/Input";
import { useState } from "react";
import Bouton from "../../../Components/Bouton/Bouton";
import { projectApi } from "../../../api/projects/Crud";
import Loader from "../../../Components/Loader/Loader";

export default function Create() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successmessage, setSuccessMessage] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("en_cours");
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);
  const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };
  // const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setStatus(event.target.value);

  const goToBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setSuccessMessage("");
      const formData = new FormData();

      formData.set("name", name);
      formData.set("description", description);
      formData.set("status", status);

      await projectApi.create(formData);
      setSuccessMessage("projet cree avec succès");
      setName("")
      setDescription("")
      setStatus("")
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button type="button" onClick={goToBack}>
        Retour
      </button>
      <h1>Creer un projet</h1>

      <form onSubmit={handleSubmit}>
      {
        isLoading ? <Loader/> : ''
      }

        {successmessage}
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

        <select name="status" value={status} onChange={handleChangeStatus}>
          <option value="">-- Choisir un statut --</option>
          <option value="en_cours">En cours</option>
          <option value="terminer">Terminé</option>
        </select>

        {/* <Input
          label="statut du projet"
          type="text"
          placeholder="Veiller saisir le statut du projet"
          reference="status"
          value={status}
          onChange={handleChangeStatus}
        /> */}

        {/* <button type="submit" disabled={isLoading}>
          Creer
        </button> */}
        <Bouton disabled={isLoading} label="Creer" />
      </form>
    </div>
  );
}

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./Project.css";
import { Link } from "react-router";
import Bouton from "../../Components/Bouton/Bouton";

type projectType = {
  id: number;
  name: string;
  description: string;
  status: string;
};

type projectResponse = {
  data: projectType[];
};

export default function Project() {
  const [projects, setProjects] = useState<projectType[]>([]);

  const handleSubmit = async (id: number) => {
    try {
      const confirm = window.confirm("voulez vous supprimer ce projet ? ");

      if (confirm) {
        await axios.delete(
          `https://focuspro.dayal-enterprises.com/public/api/projects/${id}`
        );
        console.log("Projet supprimé avec succès");
      }
    } catch (error) {
      console.log("Erreur lors de la suppression :", error);
    }
  };

  useEffect(() => {
    axios
      .get("https://focuspro.dayal-enterprises.com/public/api/projects")
      .then(function (response) {
        const resultData: projectResponse = response;
        setProjects(resultData.data);
      })
      .catch(function (error) {
        console.log("Erreur lors du chargement :", error);
      });
  }, []);

  return (
    <Fragment>
      <h1>Liste des projets</h1>
      <Link to={"/add"}>Add +</Link>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td
                style={{
                  color:
                    project.status === "en_cours"
                      ? "#f1c40f"
                      : project.status === "terminer"
                      ? "#27ae60"
                      : "#e74c3c",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {project.status}
              </td>
              <td>
                <button type="button" onClick={() => handleSubmit(project.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

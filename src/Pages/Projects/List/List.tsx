import { Link } from "react-router";
import Loader from "../../../Components/Loader/Loader";
import { useEffect, useState } from "react";
import type { Project } from "../../../data/models/project/model";
import { projectApi } from "../../../api/projects/Liste";

export default function List() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectApi.getAll();
        setProjects(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div>
      <h1>Liste des projets</h1>

      <Link to={"/projects/create"}>Creer un projet</Link>

      <br />
      <br />
      <br />

      {isLoading ? (
        <Loader />
      ) : (
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
            {projects.length === 0 ? <td colSpan={2}>Aucune</td> :

            projects.map((project, index) => (
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
                <button type="button" >
                  Supprimer
                </button>
              </td>
            </tr>
          ))
             }
          </tbody>
        </table>
      )}
    </div>
  );
}



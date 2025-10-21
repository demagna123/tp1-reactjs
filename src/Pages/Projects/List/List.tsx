import { Link, useNavigate } from "react-router";
import Loader from "../../../Components/Loader/Loader";
import { useEffect, useState } from "react";
import type { Project } from "../../../data/models/project/model";
import { projectApi } from "../../../api/projects/Crud";
import "./List.css";
import { fa } from "zod/locales";
export default function List() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [successmessage, setSuccessMessage] = useState<string>("");
  const navigate = useNavigate();

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
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDestroyProject = async (id: number) => {
    try {
      setIsLoading(true)
      setSuccessMessage("")
      await projectApi.destroy(id);

      setIsLoading(false)
      setSuccessMessage("suppresion effectué avec succcès")

      fetchProjects();
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  };

  const handleEditProject = (id: number) => {
    navigate(`/projects/${id}/edit`)

  };

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
            {projects.length === 0 ? (
              <td colSpan={3}>Aucune</td>
            ) : (
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
                    <button
                      type="button"
                      onClick={() => handleDestroyProject(project.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="size-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      supprimer
                    </button>

                    <button
                      onClick={() => handleEditProject(project.id)}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Modifier
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

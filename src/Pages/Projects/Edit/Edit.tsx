import { useNavigate } from "react-router";

export default function Edit() {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button type="button" onClick={goToBack}>
        Retour
      </button>
      <h1>Modifier un projet</h1>
    </div>
  );
}

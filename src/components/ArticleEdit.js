import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ArticleEdit({ article, onUpdate }) {
  const [titre, setTitre] = useState(article.titre);
  const [texte, setTexte] = useState(article.contenu);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre.trim() || !texte.trim()) {
      setError("Le titre et le contenu ne peuvent pas être vides !");
      setSuccess("");
      return;
    }

    onUpdate(article.id, { titre, contenu: texte });
    setSuccess("Article mis à jour avec succès !");


    setTimeout(() => {
      navigate(`/article/${article.id}`);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>} {/* message succès */}
      <input
        className="border p-2 rounded w-full my-2"
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Titre"
      />
      <textarea
        className="border p-2 rounded w-full my-2"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Contenu"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Enregistrer
      </button>
    </form>
  );
}

export default ArticleEdit;

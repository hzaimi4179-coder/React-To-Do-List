import { useState } from 'react';

function TodoItem({ tache, changerEtat, supprimerTache, editerTache }) {
  const [isEditing, setIsEditing] = useState(false);
  const [texte, setTexte] = useState(tache.texte);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texte.trim()) {
      setError('Le texte ne peut pas être vide !');
      return;
    }
    editerTache(tache.id, texte);
    setIsEditing(false);
    setError('');
  };

  return (
    <li className="flex items-center justify-between my-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={tache.terminee}          // <-- relié directement à l'état
          onChange={() => changerEtat(tache.id)}
        />
        <span
          className={`ml-2 ${tache.terminee ? 'line-through text-gray-400' : ''}`}
        >
          {tache.texte}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-2 rounded"
        >
          Éditer
        </button>
        <button
          onClick={() => supprimerTache(tache.id)}
          className="bg-red-500 text-white px-2 rounded"
        >
          X
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2 w-full">
          <input
            value={texte}
            onChange={(e) => setTexte(e.target.value)}
            className="border p-1 rounded flex-1"
          />
          <button type="submit" className="bg-green-500 text-white px-2 rounded">
            Sauvegarder
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 px-2 rounded"
          >
            Annuler
          </button>
        </form>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </li>
  );
}

export default TodoItem;

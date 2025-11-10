import { useState } from 'react';
import ArticleList from '../components/ArticleList';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Accueil({ articles }) {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    if (!texte.trim()) return;
    setTaches([
      ...taches,
      { id: Date.now(), texte, terminee: false }
    ]);
  };

  const changerEtat = (id) => {
    setTaches(prevTaches =>
      prevTaches.map(t =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(prevTaches => prevTaches.filter(t => t.id !== id));
  };

  const editerTache = (id, nouveauTexte) => {
    setTaches(prevTaches =>
      prevTaches.map(t => (t.id === id ? { ...t, texte: nouveauTexte } : t))
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Articles récents</h2>
      <ArticleList articles={articles} />

      <hr className="my-4" />

      <h2 className="text-xl font-bold mb-2"> To-Do List</h2>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={taches}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
        editerTache={editerTache}
      />
    </div>
  );
}

export default Accueil;
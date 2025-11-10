import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache, editerTache }) {
  return (
    <ul>
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
          editerTache={editerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;

import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ArticleEdit from './ArticleEdit';

function ArticleDetail({ articles, onUpdate }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);
  const [isEditing, setIsEditing] = useState(false);

  if (!article) return <p>Article non trouvé.</p>;

  if (isEditing) {
    return <ArticleEdit article={article} onUpdate={onUpdate} />;
  }

  return (
    <div>
      <h1>{article.titre}</h1>
      <p>{article.contenu}</p>
      <button onClick={() => setIsEditing(true)}>Éditer</button>
      <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default ArticleDetail;

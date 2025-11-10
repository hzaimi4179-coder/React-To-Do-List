import ArticleDetail from '../components/ArticleDetail';

function Article({ articles, onUpdate }) {
  return <ArticleDetail articles={articles} onUpdate={onUpdate} />;
}

export default Article;

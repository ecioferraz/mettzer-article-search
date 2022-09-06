import React, { useEffect, useState } from 'react';
import { Button, ExternalLink, TextCard } from '../../components';
import { IArticleCard } from '../../interfaces';
import {
  addArticle,
  readFavoriteArticles,
  removeArticle,
} from '../../services/localStorage';

export default function ArticleCard({
  authors,
  description,
  id,
  title,
  type,
  urls,
}: IArticleCard) {
  const [favorite, setFavorite] = useState(
    readFavoriteArticles().some((article) => article.id === id),
  );

  const article = {
    authors,
    description,
    id,
    title,
    type,
    urls,
  };

  const handleFav = () => {
    favorite ? removeArticle(article) : addArticle(article);
    setFavorite(!favorite);
  };

  useEffect(() => {
    if (favorite) {
      setFavorite(true);
    }
  }, []);

  return (
    <div className='article-card'>
      <TextCard
        as='h2'
        className='article-title'
        text={title}
      />
      <Button
        className='fav-btn'
        name={favorite ? 'fav' : 'unfav'}
        type='button'
        handleClick={handleFav}
      />
      <TextCard
        as='p'
        className='article-type'
        text={type}
      />
      <TextCard
        as='p'
        className='article-authors'
        text={authors.join(', ')}
      />
      <TextCard
        as='p'
        className='article-description'
        text={description}
      />
      <div>
        <TextCard
          as='p'
          className='article-source'
          text={urls.length > 1 ? 'Fontes: \n' : 'Fonte: \n'}
        />
        {
          urls.map((url, i) => (
            <ExternalLink
              className={`article-source-link-${i + 1}`}
              key={i}
              url={url}
            />
          ))
        }
      </div>
    </div>
  );
}

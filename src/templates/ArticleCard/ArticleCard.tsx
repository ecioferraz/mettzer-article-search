import React, { useEffect, useState } from 'react';
import { Button, ExternalLink, TextCard } from '../../components';
import { IArticleCard } from '../../interfaces';
import {
  addArticle,
  readFavoriteArticles,
  removeArticle,
} from '../../services/localStorage';

import './styles.css';

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
    <article className='article-card'>
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
      <div className='article-source-link'>
        <TextCard
          as='p'
          className='article-source'
          text={urls.length ? 'Links: \n' : '0 links provided.'}
        />
        {
          urls.map((url, i) => (
            <ExternalLink
              className={'article-source-link'}
              i={i}
              key={i}
              url={url}
            />
          ))
        }
      </div>
    </article>
  );
}

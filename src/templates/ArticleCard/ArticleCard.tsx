import React from 'react';
import { ExternalLink, TextCard } from '../../components';


interface IArticleCard {
 authors: string[];
 description: string;
 title: string;
 type: string;
 urls: string[];
}

export default function ArticleCard({
  authors,
  description,
  title,
  type,
  urls,
}: IArticleCard) {
  return (
    <div className='article-card'>
      <TextCard
        as='h2'
        className='article-title'
        text={title}
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

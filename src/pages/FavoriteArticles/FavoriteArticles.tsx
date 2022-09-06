import React, { useEffect, useState } from 'react';
import { Button, TextCard, TextInput } from '../../components';
import { IArticleCard } from '../../interfaces';
import { readFavoriteArticles } from '../../services/localStorage';
import { ArticleCard } from '../../templates';

export default function FavoriteArticles() {
  const [favoriteArticles, setFavoriteArticles] = useState<IArticleCard[]>(
    readFavoriteArticles(),
  );
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setFavoriteArticles(
      search.length
        ? favoriteArticles.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase()))
        : readFavoriteArticles(),
    );
    setIsLoading(false);
  }, [search, page]);

  return (
    <main>
      <TextInput
        className='search-input'
        handleChange={({ target: { value } }) => setSearch(value)}
        name='search'
        placeholder='Pesquisar...'
        value={search}
      />
      {isLoading ? (
        <TextCard
          className='loading'
          text={'Buscando...'}
        />
      ) : (
        favoriteArticles.map(
          ({ authors, description, id, title, type, urls }) => (
            <ArticleCard
              authors={authors}
              description={description}
              id={id}
              key={id}
              title={title}
              type={type}
              urls={urls}
            />
          )
        )
      )}
      <Button
        className='previous-btn'
        disabled={!favoriteArticles.length || page <= 1}
        handleClick={() => setPage((currentPage) => currentPage - 1)}
        name='Anterior'
        type='button'
      />
      <Button
        className='next-btn'
        disabled={favoriteArticles.length < 10}
        handleClick={() => setPage((currentPage) => currentPage + 1)}
        name='Próxima'
        type='button'
      />
    </main>
  );
}

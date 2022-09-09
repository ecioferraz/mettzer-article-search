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

  const filterFavoriteArticles = () => favoriteArticles
    .filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    setIsLoading(true);
    if (search.length) {
      setFavoriteArticles(filterFavoriteArticles());
      setPage(1);
    } else {
      setFavoriteArticles(readFavoriteArticles());
    }
    setIsLoading(false);
  }, [search]);

  return (
    <main>
      <TextInput
        className='search-input'
        handleChange={({ target: { value } }) => setSearch(value)}
        name='search'
        placeholder='Search...'
        value={search}
      />
      {isLoading ? (
        <TextCard
          className='loading'
          text='Searching...'
        />
      ) : (
        favoriteArticles
          .slice((page > 1 ? (page - 1) * 10 : 0), page * 10)
          .map(
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
        name='<'
        type='button'
      />
      <Button
        className='next-btn'
        disabled={favoriteArticles.length < 10}
        handleClick={() => setPage((currentPage) => currentPage + 1)}
        name='>'
        type='button'
      />
    </main>
  );
}

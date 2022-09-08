import React, { useEffect, useState } from 'react';
import { Button, TextCard, TextInput } from '../../components';
import { IArticle } from '../../interfaces';
import getData from '../../services/APIRequests';
import { ArticleCard } from '../../templates';

export default function Home() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      const { data: { data } } = await getData(search, page);
      setArticles(data);
      setIsLoading(false);
    };

    if (search.length > 0) {
      getArticles();
    }
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
      {isLoading || search.length < 1 ? (
        <TextCard
          className='loading'
          text={isLoading ? 'Buscando...' : 'Você ainda não buscou nada...'}
        />
      ) : (
        articles.map(
          ({
            _source: { authors, description, id, title, urls },
            _type: type,
          }) => (
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
        disabled={!search || page <= 1}
        handleClick={() => setPage((currentPage) => currentPage - 1)}
        name='Anterior'
        type='button'
      />
      <Button
        className='next-btn'
        disabled={!search || articles.length < 10}
        handleClick={() => setPage((currentPage) => currentPage + 1)}
        name='Próxima'
        type='button'
      />
    </main>
  );
}

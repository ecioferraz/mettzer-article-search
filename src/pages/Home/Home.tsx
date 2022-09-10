import React, { FormEvent, useState } from 'react';
import { Button, TextCard } from '../../components';
import { IArticle } from '../../interfaces';
import getData from '../../services/APIRequests';
import { ArticleCard, SearchForm } from '../../templates';

import './styles.css';

export default function Home() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const getArticles = async () => {
    setIsLoading(true);
    const { data } = await getData(search, page);
    setArticles(data[0].data);
    setTotalHits(data[0].totalHits);
    setIsLoading(false);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getArticles();
  };

  const handlePreviousPage = async () => {
    setIsLoading(true);
    setPage((currentPage) => currentPage - 1);
    await getArticles();
    setIsLoading(false);
  };

  const handleNextPage = async () => {
    setIsLoading(true);
    setPage((currentPage) => currentPage + 1);
    await getArticles();
    setIsLoading(false);
  };

  return (
    <main>
      <SearchForm
        handleChange={({ target: { value } }) => setSearch(value)}
        handleSubmit={handleSubmit}
        search={search}
      />
      {
        articles.length > 0 && (
          <TextCard
            as='p'
            className='total-hits'
            text={
              `Articles found: ${new Intl.NumberFormat('en-US')
                .format(totalHits)}`
            }
          />
        )
      }
      {!articles.length || isLoading ? (
        <TextCard
          className='loading'
          text={isLoading ? 'Searching...' : 'Start reading! Search something.'}
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
      <div className='navigation-btns'>
        <Button
          className='previous-btn'
          disabled={!search || page <= 1}
          handleClick={handlePreviousPage}
          name='previous'
          type='button'
        />
        <Button
          className='next-btn'
          disabled={!search || articles.length < 10}
          handleClick={handleNextPage}
          name='next'
          type='button'
        />
      </div>
    </main>
  );
}

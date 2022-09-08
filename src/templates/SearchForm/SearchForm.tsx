import React from 'react';
import { Button, TextInput } from '../../components';
import ISearchForm from './ISearchForm';

export default function SearchForm({
  handleChange,
  handleSubmit,
  search,
}: ISearchForm) {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        className='search-input'
        handleChange={handleChange}
        name='search'
        placeholder='Pesquisar...'
        value={search}
      />
      <Button
        className='search-btn'
        name='Buscar'
        type='submit'
        disabled={search.length < 1}
      />
    </form>
  );
}

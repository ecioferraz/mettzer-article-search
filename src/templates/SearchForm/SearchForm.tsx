import React from 'react';
import { Button, TextInput } from '../../components';
import ISearchForm from './ISearchForm';

import './styles.css';

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
        placeholder='Type here...'
        value={search}
      />
      <Button
        className='submit-btn'
        name='search'
        type='submit'
        disabled={search.length < 1}
      />
    </form>
  );
}

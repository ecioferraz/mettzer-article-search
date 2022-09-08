import { ChangeEvent, FormEvent } from 'react';

interface ISearchForm {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  search: string;
}

export default ISearchForm;

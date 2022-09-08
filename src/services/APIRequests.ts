import axios from 'axios';

const pageSize = 10;

const baseURL = 'https://core.ac.uk:443/api-v2/';

const api = axios.create({ baseURL });

const apiKey = process.env.REACT_APP_API_KEY as string;

const getData = async (query: string, page: number) =>
  api.post(
    `/search?apiKey=${apiKey}`,
    [{query, page, pageSize}],
  );

export default getData;

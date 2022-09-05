import axios from 'axios';

const baseURL = 'https://core.ac.uk:443/api-v2/';

const api = axios.create({ baseURL });

const apiKey = process.env.REACT_APP_API_KEY;

const getData = async (query: string, page: number) =>
  api.get(`/search/${query}`, {
    params: {
      page,
      apiKey,
      pageSize: 10,
    },
  });

export default getData;

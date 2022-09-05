import axios from 'axios';

const baseURL = 'https://core.ac.uk:443/api-v2/';

const api = axios.create({ baseURL });

const getData = async (query: string, page = 1) =>
  api.get(`/search/${query}`, {
    params: {
      page,
      apiKey: process.env.API_KEY,
    },
  });

export default getData;

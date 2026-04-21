import axios from 'axios';
import { queryOptions } from '@tanstack/react-query';
import { User } from '../types/user';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const userQueries = {
  all: () => queryOptions({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await api.get<User[]>('/users');
      return data;
    },
  }),
};

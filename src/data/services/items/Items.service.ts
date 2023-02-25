import api from '../api';
import { itemsProps } from './itemsService.types';

export const getAllItems = async (): Promise<itemsProps> => {
  const { data } = await api.get('/item');
  return data.results;
};

export const getItem = async (id: number): Promise<any> => {
  const { data } = await api.get(`/item/${id}`);
  return data.results;
};

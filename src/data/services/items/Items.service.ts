import api from '../api';

import { type IItemsProps } from './itemsService.types';

export const getAllItems = async (): Promise<IItemsProps> => {
  const { data } = await api.get('/item');
  return data.results;
};

export const getItem = async (id: number): Promise<IItemsProps> => {
  const { data } = await api.get(`/item/${id}`);
  return data.results;
};

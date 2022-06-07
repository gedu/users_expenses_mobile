import { Expense } from '../../types/types';
import api from '../index';

export const fetchExpenses = async (limit: number, offset: number) => {
  const response = await api.get<Array<Expense>>('/expenses', {
    params: { limit, offset },
  });
  console.log('RESPONSE: ', response.data);
};

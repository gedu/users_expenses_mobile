import { Expense } from '../../types/types';
import api from '../index';

export type NetResponse = {
  error?: string;
  expenses: Expense[];
};

export const fetchExpenses = async (
  limit: number,
  offset: number,
): Promise<NetResponse> => {
  const response = await api.get<NetResponse>('/expenses', {
    params: { limit, offset },
  });

  //todo: handle better with status too
  if (response.data) {
    return { expenses: response.data.expenses, error: undefined };
  } else {
    return { expenses: [], error: 'Something went wrong' };
  }
};

import { Platform } from 'react-native';
import { Expense, ReceiptPicture } from '../../types/types';
import api from '../index';

export type ExpensesResponse = {
  error?: string;
  expenses: Expense[];
  total: number;
};

export type ExpenseResponse = {
  error?: string;
  expense: Expense;
};

export const fetchExpenses = async (
  offset: number,
  limit: number = 25,
): Promise<ExpensesResponse> => {
  const response = await api.get<ExpensesResponse>('/expenses', {
    params: { limit, offset },
  });

  //todo: handle better with status too
  if (response.data) {
    return {
      expenses: response.data.expenses,
      total: response.data.total,
      error: undefined,
    };
  } else {
    return { expenses: [], total: 0, error: 'Something went wrong' };
  }
};

export const uploadComment = async (
  expenseId: string,
  comment: string,
): Promise<ExpenseResponse> => {
  const response = await api.post<Expense>(`/expenses/${expenseId}`, {
    comment,
  });

  if (response.data) {
    return { expense: response.data };
  } else {
    return { expense: {} as Expense, error: 'Something went wrong' };
  }
};

export const uploadReciept = async (
  expenseId: string,
  picture: ReceiptPicture,
): Promise<ExpenseResponse> => {
  const data = new FormData();
  data.append('receipt', {
    uri:
      Platform.OS === 'android'
        ? picture.uri
        : 'data:image/jpeg;base64,' + picture.data,
    name: picture.name,
    type: picture.type,
  });

  try {
    const response = await api.post<Expense>(
      `/expenses/${expenseId}/receipts`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Content-Disposition': `filename=${picture.name}`,
        },
      },
    );

    if (response.data) {
      return { expense: response.data };
    } else {
      return { expense: {} as Expense, error: 'Something went wrong' };
    }
  } catch (error) {
    console.log('ERROR RES: ', error);
    return { expense: {} as Expense, error: 'Something went wrong' };
  }
};

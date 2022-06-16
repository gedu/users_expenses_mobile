import { Expense, ReceiptPicture } from '../../types/types';
import api from '../index';

export type ExpensesResponse = {
  error?: string;
  expenses: Expense[];
};

export type ExpenseResponse = {
  error?: string;
  expense: Expense;
};

export const fetchExpenses = async (
  limit: number,
  offset: number,
): Promise<ExpensesResponse> => {
  const response = await api.get<ExpensesResponse>('/expenses', {
    params: { limit, offset },
  });

  //todo: handle better with status too
  if (response.data) {
    return { expenses: response.data.expenses, error: undefined };
  } else {
    return { expenses: [], error: 'Something went wrong' };
  }
};

export const uploadReciept = async (
  expenseId: string,
  picture: ReceiptPicture,
): Promise<ExpenseResponse> => {
  const data = new FormData();
  data.append('receipt', {
    uri: picture.uri,
    name: picture.name,
    type: picture.type,
  });

  try {
    const response = await api.post<ExpenseResponse>(
      `/expenses/${expenseId}/receipts`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Content-Disposition': `filename=${picture.name}`,
        },
      },
    );
    console.log('RESPONSE: ', response.data);
    console.log('RESPONSE exp: ', response.data.expense);
    if (response.data) {
      return { expense: response.data.expense };
    } else {
      return { expense: {} as Expense, error: 'Something went wrong' };
    }
  } catch (error) {
    console.log('ERROR RES: ', error);
    return { expense: {} as Expense, error: 'Something went wrong' };
  }
};

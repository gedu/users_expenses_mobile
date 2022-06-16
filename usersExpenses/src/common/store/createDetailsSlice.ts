import { Dispatch, SetStateAction } from 'react';
import { uploadReciept } from '../api/expenses/expensesRemoteSource';
import { StoreResponse } from '../api/model/netState';
import { Expense, ReceiptPicture } from '../types/types';
import { UseExpensesStore } from './createExpenseSlice';
import { StoreSlice } from './useStore';

export type UseDetailsStore = {
  cacheCurrent: (currentExpense: Expense) => void;
  currentExpense?: Expense;
  uploadPicture: (
    pictureData: ReceiptPicture,
    setState: Dispatch<SetStateAction<StoreResponse>>,
  ) => void;
};

export const createDetailsSlice: StoreSlice<
  UseDetailsStore,
  UseExpensesStore
> = (set, get) => ({
  currentExpense: undefined,

  cacheCurrent: (currentExpense: Expense) => {
    set({ currentExpense });
  },
  uploadPicture: async (
    pictureData: ReceiptPicture,
    setState: Dispatch<SetStateAction<StoreResponse>>,
  ) => {
    const expense = get().currentExpense;
    if (expense) {
      setState({ state: 'loading' });
      const response = await uploadReciept(expense.id, pictureData);

      if (response.error) {
        setState({ state: 'error', msg: response.error });
      } else {
        setState({ state: 'success' });
      }
    }
  },
});

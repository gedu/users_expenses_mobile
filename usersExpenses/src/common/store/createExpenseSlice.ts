import { Dispatch, SetStateAction } from 'react';
import { SetState } from 'zustand';
import { fetchExpenses } from '../api/expenses/expensesRemoteSource';
import { StoreResponse } from '../api/model/netState';
import { Expense } from '../types/types';
import { StoreSlice } from './useStore';

export type UseExpensesStore = {
  addQuery: (query: string) => void;
  currentSearch?: string;
  expenses: Expense[];
  loadExpenses: (setState: Dispatch<SetStateAction<StoreResponse>>) => void;
};

export const createExpensesSlice: StoreSlice<UseExpensesStore> = (
  set: SetState<UseExpensesStore>,
) => ({
  expenses: [],
  currentSearch: undefined,

  loadExpenses: async (setState: Dispatch<SetStateAction<StoreResponse>>) => {
    try {
      setState({ state: 'loading' });
      const res = await fetchExpenses(25, 0);
      console.log('RES bla: ', res);
      if (res.error) {
        setState({ state: 'error', msg: res.error });
      } else {
        set({ expenses: res.expenses });
        setState({ state: 'success' });
      }
    } catch (error) {
      setState({ state: 'error', msg: 'Something went wrong' });
      console.log('Loading Expenses error:', error);
    }
  },
  addQuery: (query: string) => {
    set({ currentSearch: query.length === 0 ? undefined : query });
  },
});

import { Dispatch, SetStateAction } from 'react';
import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchExpenses } from '../../common/api/expenses/expensesRemoteSource';
import { StoreResponse } from '../../common/api/model/netState';
import { Expense } from '../../common/types/types';

export type UseExpensesStore = {
  expenses: Expense[];
  loadExpenses: (setState: Dispatch<SetStateAction<StoreResponse>>) => void;
};

export const useExpenses = create<UseExpensesStore>(
  devtools(
    (set: SetState<UseExpensesStore>) => ({
      expenses: [],

      loadExpenses: async (
        setState: Dispatch<SetStateAction<StoreResponse>>,
      ) => {
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
    }),
    { name: 'UseExpensesStore' },
  ),
);

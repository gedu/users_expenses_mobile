import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchExpenses } from '../../common/api/expenses/expensesRemoteSource';
import { Expense } from '../../common/types/types';

export type UseExpensesStore = {
  expenses: Expense[];
  loadExpenses: () => void;
};

export const useExpenses = create<UseExpensesStore>(
  devtools(
    (set: SetState<UseExpensesStore>) => ({
      expenses: [],

      loadExpenses: async () => {
        try {
          const res = await fetchExpenses(25, 0);
          console.log('RES bla: ', res);
          if (res.error) {
          } else {
            set({ expenses: res.expenses });
          }
        } catch (error) {
          console.log('Loading Expenses error:', error);
        }
      },
    }),
    { name: 'UseExpensesStore' },
  ),
);

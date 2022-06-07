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
        await fetchExpenses(25, 0);
        set({ expenses: [] });
      },
    }),
    { name: 'UseExpensesStore' },
  ),
);

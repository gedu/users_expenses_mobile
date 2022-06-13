import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Expense } from '../../common/types/types';

export type UseDetailsStore = {
  cacheCurrent: (currentExpense: Expense) => void;
  currentExpense?: Expense;
};

export const useDetails = create<UseDetailsStore>(
  devtools(
    (set: SetState<UseDetailsStore>) => ({
      expenses: undefined,

      cacheCurrent: (currentExpense: Expense) => {
        set({ currentExpense });
      },
    }),
    { name: 'UseDetailsStore' },
  ),
);

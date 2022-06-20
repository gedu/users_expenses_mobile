import produce from 'immer';
import { Dispatch, SetStateAction } from 'react';
import { GetState, SetState } from 'zustand';
import { fetchExpenses } from '../api/expenses/expensesRemoteSource';
import { StoreResponse } from '../api/model/netState';
import { Expense } from '../types/types';
import { StoreSlice } from './useStore';

export type UseExpensesStore = {
  addQuery: (query: string) => void;
  canLoadMore: () => boolean;
  currentSearch?: string;
  expenses: Expense[];
  loadExpenses: (
    setState: Dispatch<SetStateAction<StoreResponse>>,
    page?: number,
  ) => void;
  totalExpenses: number;
  updateExpense: (expense: Expense) => void;
};

export const createExpensesSlice: StoreSlice<UseExpensesStore> = (
  set: SetState<UseExpensesStore>,
  get: GetState<UseExpensesStore>,
) => ({
  expenses: [],
  currentSearch: undefined,
  totalExpenses: -1,

  loadExpenses: async (setState: Dispatch<SetStateAction<StoreResponse>>) => {
    try {
      setState({ state: 'loading' });

      const res = await fetchExpenses(get().expenses.length);

      if (res.error) {
        setState({ state: 'error', msg: res.error });
      } else {
        if (get().totalExpenses === -1) {
          set({ totalExpenses: res.total });
        }
        set({
          expenses: produce(get().expenses, draft => {
            draft.push(...res.expenses);
          }),
        });
        setState({ state: 'success' });
      }
    } catch (error) {
      setState({ state: 'error', msg: 'unspecified' });
    }
  },
  canLoadMore: () => {
    return get().expenses.length < get().totalExpenses;
  },
  addQuery: (query: string) => {
    set({ currentSearch: query.length === 0 ? undefined : query });
  },
  updateExpense: (newExpense: Expense) => {
    const updatedExpenses = produce(get().expenses, draft => {
      const expenseToUpdate = draft.find(
        expense => expense.id === newExpense.id,
      );
      if (expenseToUpdate) {
        expenseToUpdate.receipts = newExpense.receipts;
        expenseToUpdate.comment = newExpense.comment;
      }
    });

    set({ expenses: updatedExpenses });
  },
});

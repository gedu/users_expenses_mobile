import produce from 'immer';
import { Dispatch, SetStateAction } from 'react';
import { GetState, SetState } from 'zustand';
import { fetchExpenses } from '../api/expenses/expensesRemoteSource';
import { StoreResponse } from '../api/model/netState';
import { Expense } from '../types/types';
import { StoreSlice } from './useStore';

export type UseExpensesStore = {
  addQuery: (query: string) => void;
  currentSearch?: string;
  expenses: Expense[];
  loadExpenses: (setState: Dispatch<SetStateAction<StoreResponse>>) => void;
  updateExpense: (expense: Expense) => void;
};

export const createExpensesSlice: StoreSlice<UseExpensesStore> = (
  set: SetState<UseExpensesStore>,
  get: GetState<UseExpensesStore>,
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

// import { renderHook } from '@testing-library/react';
// import React from 'react';
import { waitFor } from '@testing-library/react-native';
import create, { EqualityChecker, SetState, StateSelector } from 'zustand';
import { ExpensesResponse } from '../../api/expenses/expensesRemoteSource';
import { Expense } from '../../types/types';
import { mockReturnValueOnce } from '../../utils/test-utils/mockUtils';

import { UseExpensesStore, createExpensesSlice } from '../createExpenseSlice';

type EachStoreProps = {
  as: keyof UseExpensesStore;
  expected: unknown;
};

describe('createExpenseSlice', () => {
  it.each`
    as                 | expected
    ${'currentSearch'} | ${undefined}
    ${'expenses'}      | ${[]}
    ${'totalExpenses'} | ${-1}
  `(
    'when expense slice is initialized $as should be $expected',
    ({ as, expected }: EachStoreProps) => {
      const store = create(createExpensesSlice);

      expect(store.getState()[as]).toStrictEqual(expected);
    },
  );

  it.each`
    as                | expected
    ${'totalExpense'} | ${168}
    ${'expenses'}     | ${[{}, {}, {}]}
  `(
    'when loadExpenses gets called $totalExpense should be $expected',
    async ({ as, expected }: EachStoreProps) => {
      const TOTAL_EXPENSES_AMOUNT = 168;
      jest.mock('../../api/expenses/expensesRemoteSource', () => ({
        fetchExpenses: jest.fn(() =>
          Promise.resolve<ExpensesResponse>({
            expenses: [{}, {}, {}] as Expense[],
            total: TOTAL_EXPENSES_AMOUNT,
            error: undefined,
          }),
        ),
      }));
      const store = create(createExpensesSlice);
      const setStateMock = jest.fn();
      store.getState().loadExpenses(setStateMock);

      waitFor(() => {
        expect(store.getState()[as]).toBe(expected);
      });
    },
  );

  it('when canLoadMore is called should return true if the amount of expenses is less than total and false when the amount is equal o higher', () => {
    const TOTAL_EXPENSES_AMOUNT = 3;
    const mockExpensesResults = mockReturnValueOnce([
      () =>
        Promise.resolve<ExpensesResponse>({
          expenses: [{}] as Expense[],
          total: TOTAL_EXPENSES_AMOUNT,
          error: undefined,
        }),
      () =>
        Promise.resolve<ExpensesResponse>({
          expenses: [{}, {}, {}] as Expense[],
          total: TOTAL_EXPENSES_AMOUNT,
          error: undefined,
        }),
    ]);
    jest.mock('../../api/expenses/expensesRemoteSource', () => ({
      fetchExpenses: mockExpensesResults,
    }));
    const store = create(createExpensesSlice);
    const setStateMock = jest.fn();
    store.getState().loadExpenses(setStateMock);

    waitFor(() => {
      expect(store.getState().canLoadMore).toBe(true);
    });

    store.getState().loadExpenses(setStateMock);

    waitFor(() => {
      expect(store.getState().canLoadMore).toBe(false);
    });
  });
});

// import { renderHook } from '@testing-library/react';
// import React from 'react';
import { waitFor } from '@testing-library/react-native';
import create, { EqualityChecker, SetState, StateSelector } from 'zustand';
import { ExpensesResponse } from '../../api/expenses/expensesRemoteSource';

import { UseExpensesStore, createExpensesSlice } from '../createExpenseSlice';

const TOTAL_EXPENSES_AMOUNT = 168;

jest.mock('../../api/expenses/expensesRemoteSource', () => ({
  fetchExpenses: jest.fn(() =>
    Promise.resolve<ExpensesResponse>({
      expenses: [],
      total: TOTAL_EXPENSES_AMOUNT,
      error: undefined,
    }),
  ),
}));

describe('createExpenseSlice', () => {
  it.each`
    as                 | expected
    ${'currentSearch'} | ${undefined}
    ${'expenses'}      | ${[]}
    ${'totalExpenses'} | ${-1}
  `(
    'when expense slice is initialized $as should be $expected',
    ({ as, expected }: { as: keyof UseExpensesStore; expected: unknown }) => {
      const store = create(createExpensesSlice);

      expect(store.getState()[as]).toStrictEqual(expected);
    },
  );

  it('when loadExpenses gets called expenses, totalExpenses should be updated', () => {
    const store = create(createExpensesSlice);
    const setStateMock = jest.fn();
    store.getState().loadExpenses(setStateMock);

    waitFor(() => {
      expect(store.getState().totalExpenses).toBe(TOTAL_EXPENSES_AMOUNT);
    });
  });
});

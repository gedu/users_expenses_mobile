import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { fetchExpenses } from '../../common/api/expenses/expensesRemoteSource';
import { ExpensesResponse } from '../../common/api/expenses/expensesRemoteSource';
import { Expense } from '../../common/types/types';
import { mockImplementation } from '../../common/utils/test-utils/mockUtils';
import { ExpensesRoutes } from '../../routes';

import { HomePage } from '../HomePage';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('lottie-react-native');
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
jest.mock('../../common/api/expenses/expensesRemoteSource', () => ({
  ...jest.requireActual('../../common/api/expenses/expensesRemoteSource'),
  fetchExpenses: jest.fn(),
}));

describe('<HomePage />', () => {
  it('renders correctly', () => {
    render(<HomePage />);
  });

  it('when fetch expenses HomePage should be in loading state', () => {
    const { getByTestId } = render(<HomePage />);

    const loadingComponent = getByTestId('loading-view');
    expect(loadingComponent).toBeDefined();
  });

  it('when fetch expenses HomePage should end on error view if the fetch fails', async () => {
    jest.mock('../../common/api/expenses/expensesRemoteSource', () => ({
      fetchExpenses: jest.fn(() =>
        Promise.resolve<ExpensesResponse>({
          expenses: [] as Expense[],
          total: 0,
          error: 'Test error',
        }),
      ),
    }));
    const { findByTestId } = render(<HomePage />);

    const loadingComponent = await findByTestId('error-view');
    waitFor(() => {
      expect(loadingComponent).toBeDefined();
    });
  });

  it('when fetch expenses HomePage and success should show items and can click them to navigate', async () => {
    mockFetchExpenses();
    const { findByText, findByTestId } = render(
      <NavigationContainer>
        <ExpensesRoutes initialScreen="home" />
      </NavigationContainer>,
    );

    const itemList = await findByText('Atkins Blackburn');
    expect(itemList).toBeDefined();

    fireEvent(itemList, 'press');

    const backButton = await findByTestId('back-button');
    expect(backButton).toBeDefined();
  });

  function mockFetchExpenses() {
    mockImplementation(
      fetchExpenses,
      Promise.resolve<ExpensesResponse>({
        expenses: [
          {
            id: '5b995dff2e3cb74644948a66',
            amount: {
              value: '2149.29',
              currency: 'GBP',
            },
            date: '2017-06-21T08:45:09.326Z',
            merchant: 'QUONK',
            receipts: [],
            comment: '',
            category: '',
            user: {
              first: 'Atkins',
              last: 'Blackburn',
              email: 'atkins.blackburn@pleo.io',
            },
          },
        ] as Expense[],
        total: 1,
        error: undefined,
      }),
    );
  }
});

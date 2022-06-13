import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { StoreResponse } from '../common/api/model/netState';
import { Expense, UserExpense } from '../common/types/types';
import { styles } from './HomePage.style';
import { CreditCardList } from './credit-card-list/CreditCardList';

import { ExpensesList } from './expenses-lists/ExpensesList';
import { ExpensesLoading } from './expenses-loading/ExpensesLoading';
import { UseExpensesStore, useExpenses } from './store/useExpenses';

type ExpensesViewProps = {
  expenses: Expense[];
  fetchState: StoreResponse;
};
const loadExpensesStore = (store: UseExpensesStore) => store.loadExpenses;
const expensesStore = (store: UseExpensesStore) => store.expenses;
const currentSearchStore = (store: UseExpensesStore) => store.currentSearch;

const userNameContainsQuery = (user: UserExpense, query?: string) => {
  if (!query) {
    return true;
  }
  const smallCaseQuery = query.toLocaleLowerCase();
  return (
    user.first.toLocaleLowerCase().indexOf(smallCaseQuery) !== -1 ||
    user.last.toLocaleLowerCase().indexOf(smallCaseQuery) !== -1
  );
};

const ExpensesView = ({ fetchState, expenses }: ExpensesViewProps) => {
  if (fetchState.state === 'loading') {
    return <ExpensesLoading />;
  }

  //todo: updated error state
  if (fetchState.state === 'error') {
    return <Text>{fetchState.msg}</Text>;
  }

  return <ExpensesList expenses={expenses} />;
};

export const HomePage = () => {
  const { t } = useTranslation();
  const [fetchState, setFetchState] = useState<StoreResponse>({
    state: 'idle',
  });
  const loadExpenses = useExpenses(loadExpensesStore);
  const expenses = useExpenses(expensesStore);
  const currentSearch = useExpenses(currentSearchStore);

  useEffect(() => {
    loadExpenses(setFetchState);
  }, [loadExpenses]);

  const filteredExpenses = useMemo(() => {
    return expenses.filter(expense =>
      userNameContainsQuery(expense.user, currentSearch),
    );
  }, [expenses, currentSearch]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('totalBalance')}</Text>
      <Text style={styles.balanceText}>$11.200</Text>
      <View>
        <CreditCardList />
      </View>
      <ExpensesView fetchState={fetchState} expenses={filteredExpenses} />
    </View>
  );
};

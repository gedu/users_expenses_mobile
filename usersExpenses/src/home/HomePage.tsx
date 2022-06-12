import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { StoreResponse } from '../common/api/model/netState';
import { Expense } from '../common/types/types';
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

  useEffect(() => {
    loadExpenses(setFetchState);
  }, [loadExpenses]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('totalBalance')}</Text>
      <Text style={styles.balanceText}>$11.200</Text>
      <View>
        <CreditCardList />
      </View>
      <ExpensesView fetchState={fetchState} expenses={expenses} />
    </View>
  );
};

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './HomePage.style';
import { CreditCardList } from './credit-card-list/CreditCardList';

import { ExpensesList } from './expenses-lists/ExpensesList';
import { UseExpensesStore, useExpenses } from './store/useExpenses';

const loadExpensesStore = (store: UseExpensesStore) => store.loadExpenses;
const expensesStore = (store: UseExpensesStore) => store.expenses;

export const HomePage = () => {
  const { t } = useTranslation();
  const loadExpenses = useExpenses(loadExpensesStore);
  const expenses = useExpenses(expensesStore);

  useEffect(() => {
    loadExpenses();
  }, [loadExpenses]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('totalBalance')}</Text>
      <Text style={styles.balanceText}>$11.200</Text>
      <View>
        <CreditCardList />
      </View>
      <ExpensesList expenses={expenses} />
    </View>
  );
};

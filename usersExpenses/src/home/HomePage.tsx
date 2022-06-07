import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { styles } from './HomePage.style';
import { UseExpensesStore, useExpenses } from './store/useExpenses';

const loadExpensesStore = (store: UseExpensesStore) => store.loadExpenses;

export const HomePage = () => {
  const { t } = useTranslation();
  const loadExpenses = useExpenses(loadExpensesStore);

  useEffect(() => {
    loadExpenses();
  }, [loadExpenses]);

  return (
    <View style={styles.root}>
      <Text>{t('home')}</Text>
    </View>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import useSWR from 'swr';

import { styles } from './HomePage.style';

export const HomePage = () => {
  const { t } = useTranslation();
  const { data } = useSWR('expenses');
  console.log('DATA: ', data);
  return (
    <View style={styles.root}>
      <Text>{t('home')}</Text>
    </View>
  );
};

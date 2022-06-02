import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { styles } from './HomePage.style';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.root}>
      <Text>{t('home')}</Text>
    </View>
  );
};

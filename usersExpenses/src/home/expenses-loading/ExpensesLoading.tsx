import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './ExpensesLoading.style';

export const ExpensesLoading = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.root} testID="loading-view">
      <LottieView
        style={styles.loading}
        source={require('../../../assets/anims/expenses_loading.json')}
        autoPlay
        loop
      />
      <Text>{t('loading')}</Text>
    </View>
  );
};

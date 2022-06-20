import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './ExpensesError.style';

export const ExpensesError = () => {
  const { t } = useTranslation(['errors']);
  return (
    <View style={styles.root} testID="error-view">
      <LottieView
        style={styles.errorImg}
        source={require('../../../assets/anims/error_anim.json')}
        autoPlay
        loop
      />
      <Text style={styles.errorTitle}>{t('errors:expenseErrorTitle')}</Text>
      <Text>{t('errors:expenseErrorDescription')}</Text>
    </View>
  );
};

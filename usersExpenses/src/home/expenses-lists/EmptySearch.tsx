import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import { styles } from './ExpensesList.style';

export const EmptySearch = () => {
  return (
    <View style={styles.emptySearchContainer}>
      <LottieView
        style={styles.emptySearchAnim}
        source={require('../../../assets/anims/empty_search.json')}
        autoPlay
        loop
      />
    </View>
  );
};

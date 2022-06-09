import React from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native';
import { CardItem } from '../../common/types/types';
import { cardsLogos } from '../../theme/assetsUtils';
import { styles } from './CreditCardList.style';

export const CreditCardItem: ListRenderItem<CardItem> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardNumber}>{item.number}</Text>
        <Image style={styles.cardLogo} source={cardsLogos[item.brand]} />
      </View>
      <Text style={styles.balanceText}>{item.balance}</Text>
    </View>
  );
};

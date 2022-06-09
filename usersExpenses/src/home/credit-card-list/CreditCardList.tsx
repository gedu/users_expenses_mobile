import React from 'react';
import { FlatList } from 'react-native';
import { CreditCardItem } from './CreditCardItem';
import { mockedCards } from './mockedCards';

export const CreditCardList = () => {
  return <FlatList data={mockedCards} renderItem={CreditCardItem} horizontal />;
};

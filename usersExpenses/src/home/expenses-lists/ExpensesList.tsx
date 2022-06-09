import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Expense } from '../../common/types/types';
import { ExpensesItem } from './ExpensesItem';

type ExpensesListProps = {
  expenses: Expense[];
};

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <View>
      <Text>TODO ADD SEARCH</Text>
      <FlatList data={expenses} renderItem={ExpensesItem} />
    </View>
  );
};

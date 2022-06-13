import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Expense } from '../../common/types/types';
import { SearchBox } from '../search-box/SearchBox';
import { EmptySearch } from './EmptySearch';
import { ExpensesItem } from './ExpensesItem';
import { styles } from './ExpensesList.style';

type ExpensesListProps = {
  expenses: Expense[];
};

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  const renderItem: ListRenderItem<Expense> = ({ item }) => (
    <ExpensesItem expense={item} />
  );
  return (
    <>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={expenses}
        renderItem={renderItem}
        ListEmptyComponent={<EmptySearch />}
      />
      <SearchBox />
    </>
  );
};

import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { StoreResponse } from '../../common/api/model/netState';
import { UseExpensesStore } from '../../common/store/createExpenseSlice';
import { useStore } from '../../common/store/useStore';
import { Expense } from '../../common/types/types';
import { Colors } from '../../theme';
import { SearchBox } from '../search-box/SearchBox';
import { EmptySearch } from './EmptySearch';
import { ExpensesItem } from './ExpensesItem';
import { styles } from './ExpensesList.style';

type ExpensesListProps = {
  expenses: Expense[];
};

const loadExpensesStore = (store: UseExpensesStore) => store.loadExpenses;
const canLoadMoreStore = (store: UseExpensesStore) => store.canLoadMore;

const FooterListItem = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <View style={styles.loadingMoreContainer}>
      <ActivityIndicator color={Colors.amber} size="large" />
    </View>
  ) : null;
};

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  const loadExpenses = useStore(loadExpensesStore);
  const canLoadMore = useStore(canLoadMoreStore);
  const scrollY = useRef(new Animated.Value(0));
  const diffClamp = Animated.diffClamp(scrollY.current, 0, 100);
  const [loadMore, setLoadMore] = useState<StoreResponse>({ state: 'idle' });
  const renderItem: ListRenderItem<Expense> = ({ item }) => (
    <ExpensesItem expense={item} />
  );

  const onFetchMore = () => {
    if (canLoadMore() && loadMore.state !== 'loading') {
      loadExpenses(setLoadMore);
    }
  };
  const translateY = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.FlatList
        contentContainerStyle={styles.listContainer}
        data={expenses}
        renderItem={renderItem}
        onEndReachedThreshold={0.3}
        onEndReached={onFetchMore}
        ListEmptyComponent={<EmptySearch />}
        ListFooterComponent={
          <FooterListItem isLoading={loadMore.state === 'loading'} />
        }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY.current } } }],
          { useNativeDriver: true },
        )}
      />
      <SearchBox translateY={translateY} />
    </>
  );
};

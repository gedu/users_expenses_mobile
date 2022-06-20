import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  Image,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { searchIcon } from '../../../assets/images';
import { UseExpensesStore } from '../../common/store/createExpenseSlice';
import { useStore } from '../../common/store/useStore';
import { styles } from './SearchBox.style';

type SearchBoxProps = {
  translateY: Animated.AnimatedInterpolation;
};
const addQueryStore = (store: UseExpensesStore) => store.addQuery;
const currentSearchStore = (store: UseExpensesStore) => store.currentSearch;

export const SearchBox = ({ translateY }: SearchBoxProps) => {
  const { t } = useTranslation();
  const addQuery = useStore(addQueryStore);
  const currentSearch = useStore(currentSearchStore);

  const handleSearch = ({
    nativeEvent: { text },
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    addQuery(text);
  };

  return (
    <Animated.View style={[styles.root, { transform: [{ translateY }] }]}>
      <TextInput
        style={styles.searchInput}
        placeholder={t('searchHint')}
        onChange={handleSearch}
        defaultValue={currentSearch}
      />
      <Image style={styles.searchIcon} source={searchIcon} />
    </Animated.View>
  );
};

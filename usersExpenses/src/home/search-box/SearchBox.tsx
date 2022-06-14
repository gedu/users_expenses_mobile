import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { searchIcon } from '../../../assets/images';
import { UseExpensesStore, useExpenses } from '../store/useExpenses';
import { styles } from './SearchBox.style';

const addQueryStore = (store: UseExpensesStore) => store.addQuery;
const currentSearchStore = (store: UseExpensesStore) => store.currentSearch;

export const SearchBox = () => {
  const { t } = useTranslation();
  const addQuery = useExpenses(addQueryStore);
  const currentSearch = useExpenses(currentSearchStore);

  const handleSearch = ({
    nativeEvent: { text },
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    addQuery(text);
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.searchInput}
        placeholder={t('searchHint')}
        onChange={handleSearch}
        defaultValue={currentSearch}
      />
      <Image style={styles.searchIcon} source={searchIcon} />
    </View>
  );
};

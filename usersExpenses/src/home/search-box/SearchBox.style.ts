import { StyleSheet } from 'react-native';

import { Colors } from '../../theme';

export const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
    start: 24,
    end: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
});

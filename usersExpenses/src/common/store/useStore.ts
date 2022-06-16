import create, { GetState, SetState } from 'zustand';
import { createDetailsSlice } from './createDetailsSlice';
import { createExpensesSlice } from './createExpenseSlice';

export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>,
) => T;

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createExpensesSlice(set, get),
  ...createDetailsSlice(set, get),
});

export const useStore = create(createRootSlice);

import errors from '../../translations/en/errors';

type Concrete<Type> = {
  [Property in keyof Type]: Type[Property];
};

export type NetState = 'idle' | 'loading' | 'success' | 'error';

export type StoreResponse =
  | {
      msg?: never;
      state: Exclude<NetState, 'error'>;
    }
  | {
      msg: Concrete<typeof errors>;
      state: Extract<NetState, 'error'>;
    };

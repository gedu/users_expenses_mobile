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
      msg: string;
      state: Extract<NetState, 'error'>;
    };

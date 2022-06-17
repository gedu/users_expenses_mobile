import { CurrencyCode } from '../utils/currency';

export type UserExpense = {
  email: string;
  first: string;
  last: string;
};

export type ReceiptPicture = {
  data?: string;
  name: string;
  type: string;
  uri: string;
};

export type PictureUrl = {
  url: string;
};

export type Expense = {
  amount: {
    currency: CurrencyCode;
    value: string;
  };
  category: string;
  comment: string;
  date: string;
  id: string;
  merchant: string;
  receipts: PictureUrl[];
  user: UserExpense;
};

export type CreditCards = 'visa' | 'master';

export type CardItem = {
  balance: string;
  brand: CreditCards;
  id: string;
  number: string;
};

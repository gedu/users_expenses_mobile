export type Expense = {
  amount: {
    currency: string;
    value: string;
  };
  category: string;
  comment: string;
  date: string;
  id: string;
  merchant: string;
  receipts: unknown[];
  user: {
    email: string;
    first: string;
    last: string;
  };
};

export type CreditCards = 'visa' | 'master';

export type CardItem = {
  balance: string;
  brand: CreditCards;
  id: string;
  number: string;
};

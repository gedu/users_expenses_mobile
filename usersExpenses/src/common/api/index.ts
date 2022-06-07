import { expensefetcher } from './expenseFetcher';

const apiConfig = {
  fetcher: (resource: string) => expensefetcher(resource),
};

export default apiConfig;

import Config from 'react-native-config';

export const expensefetcher = async (path: string) => {
  console.log('FETCHER path: ', `${Config.API_URL}/${path}`);
  try {
    const response = await fetch(`${Config.API_URL}/${path}`);
    return await response.json();
  } catch (error) {
    //todo: handle error
    console.log('ERROR: ', error);
    throw Error('Something happened');
  }
};

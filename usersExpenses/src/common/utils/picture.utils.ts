import Config from 'react-native-config';
import { PictureUrl } from '../types/types';

export const parsePicUrl = (pictures: PictureUrl[]) => {
  if (pictures.length === 0) {
    return null;
  }

  return `${Config.API_URL}${pictures[pictures.length - 1].url}`;
};

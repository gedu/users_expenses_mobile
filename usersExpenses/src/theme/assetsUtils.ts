import { ImageSourcePropType } from 'react-native';
import { masterCardLogo, visaLogo } from '../../assets/images';
import { CreditCards } from '../common/types/types';

export const cardsLogos: Record<CreditCards, ImageSourcePropType> = {
  visa: visaLogo,
  master: masterCardLogo,
};

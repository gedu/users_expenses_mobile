import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';

import App from '../src/App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-toast-message', () => {
  const RealComponent = jest.requireActual('react-native-toast-message');
  const ReactInternal = require('react');
  class Toast extends ReactInternal.Component {
    static show = jest.fn();
    static hide = jest.fn();

    render() {
      return ReactInternal.createElement(
        'Toast',
        this.props,
        this.props.children,
      );
    }
  }
  Toast.propTypes = RealComponent.propTypes;
  return Toast;
});

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});

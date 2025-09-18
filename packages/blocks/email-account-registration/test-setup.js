// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.clearAllMocks();
    global.localStorage = {
      length: 0,
      clear: jest.fn(),
      getItem: jest.fn(),
      key: jest.fn(),
      removeItem: jest.fn(),
      setItem: jest.fn(),
    }
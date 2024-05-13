import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useApi from './useApi';

jest.mock('axios');

describe('useApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create an Axios instance with default baseURL when secure is false', () => {
    renderHook(() => useApi(false));
    
    expect(axios.create).toHaveBeenCalledWith({ baseURL: 'https://restihp.ironhold.net/rest-api' });
  });

  it('should create an Axios instance with specified baseURL when secure is true', () => {
    renderHook(() => useApi(true));
    
    expect(axios.create).toHaveBeenCalledWith({ baseURL: 'https://restihp.ironhold.net/rest-api' });
  });
});

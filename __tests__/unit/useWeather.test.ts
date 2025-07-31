import {renderHook, act} from '@testing-library/react-native';
import {useWeather} from '../../src/hook/useWeather.ts';
import {getPositionGPS} from '../../src/utils/getPositionGPS.ts';
import {getWeatherData} from '../../src/utils/getWeatherData.ts';
import {getPermissions} from '../../src/utils/getPermissions.ts';

jest.mock('../../src/utils/getPermissions.ts');
jest.mock('../../src/utils/getPositionGPS.ts');
jest.mock('../../src/utils/getWeatherData.ts');
jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn(),
}));

describe('useWeather', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Checking weather data reception', async () => {
    (getPermissions as jest.Mock).mockResolvedValue(true);
    (getPositionGPS as jest.Mock).mockResolvedValue({
      latitude: 10,
      longitude: 10,
    });
    (getWeatherData as jest.Mock).mockResolvedValue({
      city: 'Test City',
      temperature: 20,
      description: 'sunny',
      icon: '01d',
    });

    const {result} = renderHook(() => useWeather(jest.fn()));

    await act(async () => {
      await result.current.handleToggle();
    });

    expect(result.current.weather).toEqual({
      city: 'Test City',
      temperature: 20,
      description: 'sunny',
      icon: '01d',
    });
    expect(result.current.isEnabled).toBeTruthy();
    expect(result.current.error).toBeNull();
  });

  test('Test for error handling if permission is not available', async () => {
    (getPermissions as jest.Mock).mockResolvedValue(false);

    const {result} = renderHook(() => useWeather(jest.fn()));

    await act(async () => {
      await result.current.handleToggle();
    });

    expect(result.current.isEnabled).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.weather).toBeNull();
  });

  test('Weather Shutdown Test', async () => {
    (getPermissions as jest.Mock).mockResolvedValue(true);
    (getPositionGPS as jest.Mock).mockResolvedValue({
      latitude: 10,
      longitude: 10,
    });
    (getWeatherData as jest.Mock).mockResolvedValue({
      city: 'Test City',
      temperature: 20,
      description: 'sunny',
      icon: '01d',
    });

    const {result} = renderHook(() => useWeather(jest.fn()));

    await act(async () => {
      await result.current.handleToggle();
    });

    expect(result.current.isEnabled).toBe(true);
    expect(result.current.weather).not.toBeNull();
    expect(result.current.error).toBeNull();

    await act(async () => {
      await result.current.handleToggle();
    });
    expect(result.current.isEnabled).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.weather).toBeNull();
  });
});

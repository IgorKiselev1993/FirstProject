jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn(),
}));

import {getPositionGPS} from '../../src/utils/getPositionGPS.ts';
import Geolocation from '@react-native-community/geolocation';

describe('Geolocation GPS', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Request coordinates GPS', async () => {
    (Geolocation.getCurrentPosition as jest.Mock).mockImplementation(
      successCallback => {
        successCallback({
          coords: {latitude: 10, longitude: 10},
        });
      },
    );

    const result = await getPositionGPS();

    expect(result).toEqual({latitude: 10, longitude: 10});
  });

  test('Handling coordinate request error GPS', async () => {
    (Geolocation.getCurrentPosition as jest.Mock).mockImplementation((successCallback, errorCallback) => {
        errorCallback(new Error('Error GPS'));
      },
    );

   await expect(getPositionGPS()).rejects.toThrow();
  });
});

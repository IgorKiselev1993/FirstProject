import {getWeatherData} from '../../src/utils/getWeatherData.ts';

describe('getWeatherData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Checking for receiving data from the weather server', async () => {
    const fakeWeather = {
      name: 'Test City',
      main: {temp: 25},
      weather: [{description: 'sunny', icon: '01d'}],
    };

    globalThis.fetch = jest.fn(() => {
      return Promise.resolve(
        new Response(JSON.stringify(fakeWeather), {
          status: 200,
          statusText: 'OK',
        }),
      );
    });

    const result = await getWeatherData(10, 10);

    expect(result).toEqual({
      city: fakeWeather.name,
      temperature: fakeWeather.main.temp,
      description: fakeWeather.weather[0].description,
      icon: fakeWeather.weather[0].icon,
    });
  });

  it('Return null on API error (404)', async () => {
    globalThis.fetch = jest.fn(() => {
      return Promise.resolve(
        new Response(JSON.stringify({}), {
          status: 404,
          statusText: 'Not Found',
        }),
      );
    });

    const result = await getWeatherData(10, 10);

    expect(result).toBeNull();
  });

  it('Check for exception throw error', async () => {
    globalThis.fetch = jest.fn(() => {
      return Promise.reject(new Error('Network Error'));
    });

    const result = await getWeatherData(10, 10);

    expect(result).toBeNull();
  });
});

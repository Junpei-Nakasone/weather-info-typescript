import { WeatherInfo } from "../src/weatherInfo";

describe('WeatherInfo', () => {
  it('exists', () => {
    const weatherInfo = new WeatherInfo()
    expect(weatherInfo).toBeDefined();
  })
})


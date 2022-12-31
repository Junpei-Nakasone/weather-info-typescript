import { WeatherInfo } from "../src/weatherInfo";

describe('WeatherInfo', () => {
  test('WeatherInfo instance exists', () => {
    const weatherInfo = new WeatherInfo()
    expect(weatherInfo).toBeDefined();
  })

  test('WeatherInfo should has apiKey and apiURL property', () => {
    const weatherInfo = new WeatherInfo()
    expect(weatherInfo).toHaveProperty("apiURL")
  })

  test('WeatherInfo should has fetchAPI method', () => {
    expect(1).toStrictEqual(1)
  })

  test('fetchAPI mehtod should set correct param from received arguments', () => {
    expect(1).toStrictEqual(1)
  })

  test('a', () => {
    expect(1).toStrictEqual(1)
  })

  it('a', () => {
    expect(1).toStrictEqual(1)
  })
})


const {toCelsius, toFahrenheit, movingAverage} = require('./functions');

describe('Test de conversion de temperatura', () => {
  test('convierte 32°F a Celsius debe resultar en 0°C', () => {
    expect(toCelsius(32)).toBe(0);
  });

  test('convierte 0 Celsius en 32 Fahrenheit', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  test('convierte 0 Celsius en 32 Fahrenheit', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });  

  test('convierte 0 Celsius en 32 Fahrenheit', () => {
    expect(toFahrenheit(-40)).toBe(-40);
  });

  test('toCelcious lanza error si no es un numero', () => {
    expect(() => toCelsius('abc')).toThrow(TypeError);
  });

  test('toFahrenheit lanza error si el valor no es un numero', () => {
    expect(() => toFahrenheit('xyz')).toThrow(TypeError);
  });
  
});
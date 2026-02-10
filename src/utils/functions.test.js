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

  test('funcion movingaverage da error si no es un arreglo', () => {
    expect(() => movingAverage('Hola como estas cxddd', 3)).toThrow(TypeError);
  });

  test('movingAverage lanza error si series tiene un valor no numérico', () => {
    expect(() => movingAverage([1, 2, '3', 'holiqiw'], 2)).toThrow(TypeError);
  });

  test('movingaverage hace correctamente el calculo', () => {
    const series = [10,20,30,40];
    const window = 2;
    const esperado = [15.0, 25.0, 35.0];
    expect(movingAverage(series, window)).toEqual(esperado);
  });


  
});
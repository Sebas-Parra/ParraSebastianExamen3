function toCelsius(f) {
  if (!Number.isFinite(f)) {
    throw new TypeError('f debe ser un numero finito');
  }  
  const factor = 10 ** 2;
  return Math.round((((f - 32) * (5 / 9)) + Number.EPSILON) * factor) / factor;
}

function toFahrenheit(c) {
  if (!Number.isFinite(c)) {
    throw new TypeError('c debe ser un numero finito');
  }  
  const factor = 10 ** 2;
  return Math.round((c * (9 / 5) + 32 + Number.EPSILON) * factor) / factor;
}
function movingAverage(series, window) {
  if (!Array.isArray(series)) {
    throw new TypeError('series debe ser un arreglo');
  }

  for (let i = 0; i < series.length; i++) {
    if (!Number.isFinite(series[i])) {
      throw new TypeError(
        'series tiene un valor no numérico'
      );
    }
  }

  if (!Number.isInteger(window)) {
    throw new TypeError('window debe ser un numero entero');
  }
  if (window < 2 || window > series.length) {
    throw new RangeError(
      'window debe ser >= 2 y <= el tamano de series'
    );
  }

  const result = [];
  let sum = 0;
  const factor = 10 ** 2;


  for (let i = 0; i < window; i++) {
    sum += series[i];
  }
  result.push(Math.round((sum / window + Number.EPSILON) * factor) / factor);
  for (let i = window; i < series.length; i++) {
    sum += series[i] - series[i - window];
    result.push(Math.round((sum / window + Number.EPSILON) * factor) / factor);
  }

  return result;
}

module.exports = {toCelsius,toFahrenheit,movingAverage};
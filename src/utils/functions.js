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


module.exports = {toCelsius,toFahrenheit};
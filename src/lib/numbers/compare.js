/**
 * Вывод минимального из двух чисел
 * @param {string} str Строка для проверки
 * @returns {boolean}
 */
function minNumbers(a, b) {
  if (typeof a === "undefined" || typeof b === "undefined") {
    return;
  }
  return Math.min(a, b);
}
export default minNumbers;

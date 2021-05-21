/**
 * Проверка на палидром
 * @param {string} str Строка для проверки
 * @returns {boolean}
 */
function polindrom(str = "") {
  const newStr = `${str}`.toLowerCase().replace(/\s/g, "");
  return newStr === newStr.split("").reverse().join("");
}
export default polindrom;

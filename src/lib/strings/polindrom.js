/**
 * Проверка на палидром
 * @param {string} str Строка для проверки
 * @returns {boolean}
 */
function polindrom(str) {
  let newStr, newStrArr /*pal*/;

  if (typeof str !== "number") {
    newStr = str.toLowerCase();
  } else {
    newStr = str.toString();
  }
  // remove spaces
  newStr = newStr.replace(/\s/g, "");
  newStrArr = newStr.split("").reverse().join("");

  if (++newStrArr !== isNaN) {
    ++newStrArr;
  }

  return newStrArr === newStr;
}
export default polindrom;

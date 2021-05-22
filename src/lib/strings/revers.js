/**
 * Разворот строки
 * @param {string} str Строка для проверки
 * @returns {string}
 */
function StrRevers(str = "") {
  let newStr = str.toString();
  newStr = newStr.split("").reverse().join("");

  return newStr;
}
export default StrRevers;

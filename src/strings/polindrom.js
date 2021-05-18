import polindrom from "../lib/strings/polindrom";

function check(form) {
  const formData = new FormData(form);
  const testString = formData.get("testString");
  const divSummary = document.getElementById("summary");
  divSummary.classList.remove("d-none");
  if (!testString) {
    divSummary.classList.remove("alert-success");
    divSummary.classList.add("alert-danger");
    divSummary.innerHTML = "Вы ничего не ввели";
    return;
  }
  const resultCheck = polindrom(testString);
  if (resultCheck) {
    divSummary.classList.remove("alert-danger");
    divSummary.classList.add("alert-success");
    divSummary.innerHTML = "Это полиндром";
    return;
  }
  divSummary.classList.remove("alert-success");
  divSummary.classList.add("alert-danger");
  divSummary.innerHTML = "Это не палиндром";
}
export default check;

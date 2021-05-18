import { Polindrome } from "../components/Polindrome";

export const SETTINGS_TASK_STRINGS = {
  id: "stringTasks",
  name: "Список решений задач, где используются строки",
  tasks: [
    {
      address: "/palindrome",
      caption: "Задача на палитндром",
      component: Polindrome,
    },
  ],
};

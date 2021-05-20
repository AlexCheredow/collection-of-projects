import { Polindrom } from "../components/Polindrom";

export const SETTINGS_TASK_STRINGS = {
  id: "stringTasks",
  name: "Список решений задач, где используются строки",
  tasks: [
    {
      address: "/polindrom",
      caption: "Задача на палитндром",
      component: Polindrom,
    },
  ],
};

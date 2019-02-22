let money = prompt("Ваш бюджет на месяц?", "Введите сумму"),
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};

let thema = prompt("Введите обязательную статью расходов в этом месяце"),
  sum = prompt("Во сколько обойдется?");

alert(appData.budget / 30);

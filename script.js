let money = +prompt("Ваш бюджет на месяц?", "Введите сумму"),
  time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
    a != "" && b != "" && a.length < 50) {
    console.log("Done");
    appData.expenses[a] = b;
  } else {
console.log("Wrong data input");
  }

}

appData.moneyPerDay = appData.budget / 30;
alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

if(appData.moneyPerDay <= 100) {
  console.log("Low income");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
  console.log("Standart income");
} else if (appData.moneyPerDay > 2000) {
  console.log("High income");
} else {
  console.log("Mistake");
}

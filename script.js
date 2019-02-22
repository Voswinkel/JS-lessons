

var money = prompt ("Ваш бюджет на месяц?", "Введите сумму");
var time = prompt ("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
var appData = {
  budget: money,
  timeData: time
};

var thema = prompt ("Введите обязательную статью расходов в этом месяце");
var sum = prompt ("Во сколько обойдется?");

var expenses = {
  topic: thema,
  amount: sum
};

var optionalExpenses = {};
var income = [];
var savings = false;

var oneDayBudget = (money-sum)/30;
alert ("бюджет на 1 день: " + oneDayBudget);

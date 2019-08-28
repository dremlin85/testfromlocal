'use strict';



let money = +prompt('Ваш бюджет на месяц?' , '' );
let time = prompt('Введите дату в формате YYYY-MM-DD' , '' );
let expensesStateOfOutcomes = prompt('Введите обязательную статью расходов в этом месяце' , '' );
let sumOfExpenses = +prompt( 'Во сколько обойдется?' , '' );


let appData = {
    budget: money,
    timeData: time,
    expences: {
        expensesStateOfOutcomes, sumOfExpenses
              
    },
    optionalExpenses:{} ,
    income: [],
    savings: false,

};

alert((money-sumOfExpenses)/30 );







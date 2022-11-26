
// Business Logic

import CurrencyExchanger from './js/currencyExchanger.js';

function getCurrency(firstCurrency, wantedCurrency, amount) {
  let promise = CurrencyExchanger.getCurrency(firstCurrency, wantedCurrency, amount);
  promise.then(function (response, conversion_rates) {
    printElements(response, conversion_rates, wantedCurrency);
  }, function (error) {
    printError(error);
    console.log(getCurrency);
   
  });

}

// UI Logic_______________

function printElements(response, firstCurrency, wantedCurrency) {
  let exchangeAmount = response.conversion_rates;
  console.log(response);
document.querySelector("#output").innerHTML = `The exchange in ${firstCurrency} to ${wantedCurrency} is worth ${exchangeAmount} `;
}



function printError(error, firstCurrency, wantedCurrency) {
  let output = document.getElementById("output");
  output.innerHTML = null;
  if (error.toString().includes('404')) {
    output.innerHTML = `${error} with ${firstCurrency} Or With ${wantedCurrency} Please Make a Different choice`;
  } else {
    output.innerHTML = `There is an error with your choices. Please make a different choice.`;
  }



  function handleSubmit(event) {
    event.preventDefault();
    output.innerHTML = null;
    const amount = document.getElementById("amount").value;
    const firstCurrency = document.getElementById("firstCurrency").value;
    const wantedCurrency = parseInt.getElementById("wantedCurrency").value;
    getCurrency(firstCurrency, wantedCurrency, amount);
    console.log(getCurrency);
  }

  window.addEventListener("load", function () {
    this.document.querySelector("form").addEventListener("submit", handleSubmit);

  });
}

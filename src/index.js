
// import CurrencyService from './js/currencyExchanger.js';



// // Business Logic_______________

// function getCurrency(currency, usd) {
//   let promise = CurrencyService.getCurrency(currency, usd);
//   promise.then(function (conversion_rates) {
//     printElements(conversion_rates);
//   }, function (error) {
//     printError(error);

//     console.log(getCurrency);
   
//   });

// }


// // UI Logic_______________


// function printElements(response, currency, usd) {
//   let exchangeAmount = response.conversion_rates;
// document.querySelector("#output").innerHTML = `The exchange in ${usd} to ${currency} is worth ${exchangeAmount} `;
// }



// function printError(error) {
//   let output = document.getElementById("output");
//   output.innerHTML = null;
//   if (error.toString().includes('404')) {
//     output.innerHTML = printError();
//   } else {
//     output.innerHTML = printError();
//   }


//   function handleSubit(event) {
//     event.preventDefault();
//     output.innerHTML = null;
//     const currency = document.getElementById("currency-type").value;
//     const usd = parseInt.getElementById("usd-input");

//     getCurrency(currency, usd);
//     console.log(getCurrency);
//   }

//   window.addEventListener("load", function () {
//     this.document.querySelector("form").addEventListener("submit", handleSubit);

//   });
// }
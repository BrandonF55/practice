
export default class CurrencyExchanger {
  static getCurrency(amount, firstCurrency, wantedCurrency) {
    return new Promise(function (resolve, reject) {
      let request = XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${firstCurrency}/${wantedCurrency}/${amount}`;
      request.addEventListener("loadend", function () {
        console.log(process.env.API_KEY);
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, firstCurrency, wantedCurrency, amount]);
        } else {
          reject([this, response, firstCurrency, amount]);
        }
      });
      request.open("GET", url, true);
      request.sent();
        console.log()
    });
  }
}

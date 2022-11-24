console.log(heyy);

export default class  CurrencyService {
  static getCurrency(currency, usd) {
    return new Promise(function (resolve, reject) {
      console.log(getCurrency);
      let request = XMLHttpRequest();
    
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency}/${usd}`;
      request.addEventListener("loadend", function () {
        

        const response = JSON.parse(this.responseText);
      
        if (this.status === 200) {
          resolve([response, currency, usd]);
        } else {
          reject([this, response, currency, usd]);
        
        }
      });
      request.open("GET", url, true);
      request.sent();
    });
  }
}

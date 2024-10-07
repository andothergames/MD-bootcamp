const exchangeRatesURL = "https://open.er-api.com/v6/latest/GBP";

const getExchangeRates = async () => {
    const res = await fetch(exchangeRatesURL);
    const data = await res.json();

    console.log("Current rates are: ", JSON.stringify(data, null, 2));
};

getExchangeRates();
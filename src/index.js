// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    const result = {};
    const coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };

    for (let coinLetter of Object.keys(coins)) {
        const coinsNumber = Math.floor(currency / coins[coinLetter]);

        if (coinsNumber > 0) {
            result[coinLetter] = coinsNumber;
            currency = currency % coins[coinLetter];
        }
    }

    return result;
}

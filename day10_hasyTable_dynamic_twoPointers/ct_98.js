// Best Time to Buy and Sell Stock

// ### **문제 설명**
// i번째 날의 주식 가격을 나타내는 prices 배열이 주어진다. 수익을 극대화할 수 있는 날 주식을 사고 팔아서 얻을 수 있는 최대 수익을 반환한다. 수익을 얻을 수 없으면 0을 반환한다.

// Example 1:
// prices가 [7, 1, 5, 3, 6, 4]인 경우, 주식 가격이 1인 2일(i = 1)에 사서 주식 가격이 6인 5일(i = 4)에 팔면 최대 수익 5를 얻을 수 있다.
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// prices가 [7, 6, 4, 3, 1]인 경우, 수익을 얻을 수 없으므로 0을 반환한다.
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = prices => {
  let minPrice = Infinity;  // 최소 가격 초기화
  let maxProfit = 0;        // 최대 수익 초기화

  for (let price of prices) {
      if (price < minPrice) {
          // 현재 가격이 지금까지의 최소 가격보다 낮다면 최소 가격을 갱신
          minPrice = price;
      } else if (price - minPrice > maxProfit) {
          // 현재 가격에서 최소 가격을 뺀 값이 현재까지의 최대 이익보다 크다면 최대 이익 갱신
          maxProfit = price - minPrice;
      }
  }

  return maxProfit;
};

const maxProfit_2 = prices => {
  let [buyPrice, maxProfit] = [prices.at(0), 0];

  for (const currentPrice of prices) {
    if (currentPrice > buyPrice) maxProfit = Math.max(maxProfit, currentPrice - buyPrice);
    else buyPrice = currentPrice;
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

console.log(maxProfit_2([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit_2([7, 6, 4, 3, 1])); // 0
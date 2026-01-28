/* method chaining example: filter, map, reduce */

const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")  // Filter for credit transactions
  .map((transaction) => transaction.amount * 1.1)  // Apply 10% bonus to each amount
  .reduce((sum, amount) => sum + amount, 0); // Sum all the amounts

console.log(totalCreditWithBonus);
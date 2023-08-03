function checkCashRegister(price, cash, cid) {
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
  const v = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };
  let change = cash - price;
  const result = { change: [] };

  const totalCid = cid.reduce((a, e) => a + e[1], 0);
  if (totalCid === cash - price) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }

  cid.reverse();

  const valueFromCoin = (amount, coinValue, coinTotalAmount) => {
    const value = Math.floor(amount / coinValue) * coinValue;
    return value > coinTotalAmount ? coinTotalAmount : value;
  };

  cid.forEach((e) => {
    const vCoin = valueFromCoin(change, v[e[0]], e[1]);
    result.change.push([e[0], vCoin]);
    change -= vCoin;
  });

  const totalChange = result.change.reduce((a, e) => a + e[1], 0);
  if (totalChange < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    result.change = [];
    return result;
  }

  // correct math computational error
  const oneCentError = Math.round(change * 100) * 0.01;
  result.change[result.change.length - 1][1] += oneCentError;

  result.status = 'OPEN';
  result.change = result.change.filter((e) => e[1]);
  return result;
}

console.log(checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]));

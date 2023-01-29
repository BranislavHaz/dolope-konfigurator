export function formatNumber2Decimals(number) {
  return parseFloat(number).toFixed(2).replace(".", ",");
}

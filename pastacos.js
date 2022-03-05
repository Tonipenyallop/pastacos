function pastacos(n = 10) {
  function oneRow(n, startIdx, endIdx, result) {
    if (n === 1) return str;
    else {
      let str = "🌮";

      let isStr = true;
      let counter = 0;
      let weWant = endIdx;
      for (let i = 0; i < 2 * n - 1; i++) {
        str === "🌮" ? (str = "🍝") : (str = "🌮");

        if (i == startIdx) isStr = true;

        if (isStr && startIdx <= i && weWant > counter) {
          result += str;
          counter++;
        } else result += " ";

        isStr = !isStr;
        if (endIdx == 0) return result;
      }
      result += "\n";

      result = oneRow(n, startIdx + 1, endIdx - 1, result);
      return result;
    }
  }
  const reverse = oneRow(n, 0, n, "");
  return [...reverse].reverse().join(",").replaceAll(",", "");
}

console.log(pastacos());

module.exports = { pastacos };

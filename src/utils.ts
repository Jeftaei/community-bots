export function formatNumber(x): string {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPercentage(x): string {
  return (x * 100).toFixed(1) + "%";
}

export function formatPlacement(x: number): string {
  let checker = BigInt(x) % BigInt(100);
  if (checker > 10 && checker < 20) return x + "th";
  checker %= BigInt(10);
  if (checker == BigInt(1)) return formatNumber(x) + "st";
  if (checker == BigInt(2)) return formatNumber(x) + "nd";
  if (checker == BigInt(3)) return formatNumber(x) + "rd";
  return formatNumber(x) + "th";
}

export function createEnglishList(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return items[0] + " and " + items[1];
  let listString = items[0];
  for (let i = 1; i < items.length; i++) listString += (i == items.length - 1 ? ", and " : ", ") + items[i];
  return listString;
}

export function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function escapeDiscordMarkdown(string: string) {
  return string.replace(/[\\`_~\*\|:#@><-]/g, "\\$&");
}

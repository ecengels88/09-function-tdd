export default function (cardValue) {
  if ((cardValue === 'jack') || cardValue === 'queen' || cardValue === 'king') {
    return 10;
  }
  if (cardValue === 'ace') {
    return 11;
  }

  return parseInt(cardValue);
}

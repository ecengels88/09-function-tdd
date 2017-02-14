import cardSum from './card-sum';
import cardSplit from './should-split';

export default function (card1, card2) {
  if (cardSplit(card1, card2)) {
    return false;
  }

  return cardSum(card1, card2) <= 17;
}

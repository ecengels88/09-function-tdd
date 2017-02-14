import aliveNeighbors from './alive-neighbors';

export default function (a) {
  const reviveEh = aliveNeighbors(a);

  if (reviveEh <= 2 || reviveEh >= 4) {
    return false;
  } else {
    return true;
  }
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = num => {
  return -Math.abs(num)
}
makeNegative(666)
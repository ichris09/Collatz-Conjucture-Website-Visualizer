export function generateCollatzSequence(start: number): number[] {
  const sequence: number[] = [start]
  let current = start

  while (current !== 1) {
    if (current % 2 === 0) {
      current = current / 2
    } else {
      current = 3 * current + 1
    }
    sequence.push(current)
  }

  return sequence
}
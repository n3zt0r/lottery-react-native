export function createBoard(num: number) {
  let numbers: number[] = [];
  for (let i = 0; i < num; i++) {
    numbers.push(i);
  }

  let currentIndex = numbers.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [numbers[currentIndex], numbers[randomIndex]] = [
      numbers[randomIndex],
      numbers[currentIndex],
    ];
  }

  return numbers;
}

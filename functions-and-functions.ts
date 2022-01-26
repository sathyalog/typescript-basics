/* callback example */
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

/* funtion take a number and return a new number */
export type MutationFunction = (v: number) => number;

/* function as param */
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 100));


/* Functions returning functions - closure example */
export function createAdder(num: number):(val: number) => number {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
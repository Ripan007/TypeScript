function App() {
  function add(a: number, b: number) {
    return a + b
  }
  console.log(add(10, 20));

  let numbers: Array<number> = [1, 3, 5]

  let numbers1: number[] = [1, 2, 5]
  console.log(numbers1);
  console.log(numbers);

  return <>
    welcome</>
}

export default App

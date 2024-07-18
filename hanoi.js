// function to solve the hanoi tower and get the sequences of moves

const getHanoiSolutions = (nDiscs) => {
  const solutions = []

  // recursive function to move the tower of discs from origin to destiny using aux as an auxiliary peg
  const hanoi = (n, origin, destiny, aux) => {
    if (n == 1) {
      // Base case: If there's only one disc, move it directly to destiny
      solutions.push({ disc: n, origin, destiny })
      return;
    }

    // move n - 1 discs from origin to aux, using destiny as an auxiliary peg
    hanoi(n - 1, origin, aux, destiny)

    // Move the nth disc from origin to destiny
    solutions.push({ disc: n, origin, destiny })

    // Move n - 1 discs from aux to destiny, using origin as an auxiliary peg
    hanoi(n - 1, aux, destiny, origin)
  }

  // start the recursive process with the initial call to the hanoi function
  hanoi(nDiscs, 0, 1, 2)

  return solutions;
}

export {
  getHanoiSolutions
}
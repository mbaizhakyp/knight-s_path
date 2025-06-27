function knightMoves(start, end) {
  // Knight move offsets (8 possible L-shaped moves)
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  // Check if position is valid on 8x8 chess board
  function isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // If start and end are the same, return just the starting position
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log(`=> You made it in 0 moves! Here's your path:`);
    console.log(`  [${start[0]},${start[1]}]`);
    return [start];
  }

  // BFS to find shortest path
  const queue = [[start, [start]]]; // [current_position, path_to_current]
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    // Try all 8 possible knight moves
    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      const newPos = [newX, newY];
      const posKey = `${newX},${newY}`;

      // Skip if position is invalid or already visited
      if (!isValidPosition(newX, newY) || visited.has(posKey)) {
        continue;
      }

      // Create new path including this position
      const newPath = [...path, newPos];

      // Check if we've reached the destination
      if (newX === end[0] && newY === end[1]) {
        console.log(
          `=> You made it in ${newPath.length - 1} moves! Here's your path:`
        );
        newPath.forEach((pos) => console.log(`  [${pos[0]},${pos[1]}]`));
        return newPath;
      }

      // Add to queue for further exploration
      queue.push([newPos, newPath]);
      visited.add(posKey);
    }
  }

  // This should never happen on a valid chess board
  return null;
}

// Test the function with the provided examples
console.log("Testing knightMoves([0,0],[1,2]):");
knightMoves([0, 0], [1, 2]);

console.log("\nTesting knightMoves([0,0],[3,3]):");
knightMoves([0, 0], [3, 3]);

console.log("\nTesting knightMoves([3,3],[0,0]):");
knightMoves([3, 3], [0, 0]);

console.log("\nTesting knightMoves([0,0],[7,7]):");
knightMoves([0, 0], [7, 7]);

console.log("\nTesting knightMoves([3,3],[4,3]):");
knightMoves([3, 3], [4, 3]);

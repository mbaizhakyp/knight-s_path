# Knight Moves - Shortest Path Algorithm

A JavaScript implementation that finds the shortest path for a chess knight to move from one square to another on a standard 8×8 chessboard.

## Overview

This algorithm uses **Breadth-First Search (BFS)** to calculate the minimum number of moves required for a knight to reach its destination, along with the complete path taken.

## Features

- ✅ Finds the shortest possible path
- ✅ Handles edge cases (same start/end position)
- ✅ Prevents invalid moves (off-board positions)
- ✅ Clear, formatted output showing move count and path
- ✅ Efficient BFS implementation with visited tracking

## Usage

```javascript
// Basic usage
knightMoves([0, 0], [1, 2]);
// => You made it in 1 moves! Here's your path:
//   [0,0]
//   [1,2]

// More complex example
knightMoves([0, 0], [7, 7]);
// => You made it in 6 moves! Here's your path:
//   [0,0]
//   [2,1]
//   [4,2]
//   [6,3]
//   [4,4]
//   [6,5]
//   [7,7]
```

## How It Works

1. **Knight Movement**: Implements the 8 possible L-shaped moves a knight can make
2. **BFS Algorithm**: Explores all positions level by level to guarantee shortest path
3. **Path Tracking**: Maintains the complete path from start to destination
4. **Validation**: Ensures all moves stay within the 8×8 board boundaries

## Algorithm Complexity

- **Time Complexity**: O(N) where N is the number of squares (64 for standard board)
- **Space Complexity**: O(N) for the queue and visited set

## Running the Code

Simply run the JavaScript file to see test examples:

```bash
node knightMoves.js
```

## Notes

- Assumes a standard 8×8 chessboard (coordinates 0-7)
- When multiple shortest paths exist, returns one valid solution
- Can be easily modified for different board sizes

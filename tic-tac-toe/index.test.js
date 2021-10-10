/*
Imagine you are playing a game of tic-tac-toe
and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1
if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/
const ticTacToe = (board) => {
  for (let x = 0; x < board.length; x++)
  {
    let row = true
    let col = true
    const firstElem =  board[x][0]
    const firstColElem =  board[0][x]
    for (let i = 1; i < board[x].length; i++)
      row = row && (firstElem === board[x][i])
    if (row) return 1 
    for (let i = 0; i < board[x].length; i++)
      col = col && (firstColElem === board[i][x])
    if (col) return 1 
  }
  let _x = true
  let _y = true
  for (let i = 0; i < board.length; i++)
    {
      for (let x = board.length -1; x > 0; x--)
        {_y = _y && (board[x][i] === board[i][x])
        _x = _x && (board[x][i] === board[i][x])}
    }
  if (_x || _y) return 1 
  return -1
} 

describe('Tests', () => {
  it('test ticTacToe', () => {
    var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
    expect(ticTacToe(board)).toEqual(-1);
    var solvedBoard = [[0,1,1],
                      [0,1,2],
                      [2,1,2]];
    expect(ticTacToe(solvedBoard)).toEqual(1);
  });
});
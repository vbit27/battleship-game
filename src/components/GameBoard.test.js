const GameBoard = require('./GameBoard.js');

it('should add the first ship ', () => {
  let player1 = GameBoard();
  expect(player1.gameField).toEqual([
    { name: 'ship-1', position: 0, hit: 'no' },
    '',
  ]);
});

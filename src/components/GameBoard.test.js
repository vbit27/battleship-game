const GameBoard = require('./GameBoard.js');

it('should ', () => {
  let player1 = GameBoard();
  expect(player1).toEqual({
    gameField: [{ name: 'ship-1', position: 0, hit: 'no' }, ''],
  });
});

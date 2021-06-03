const GameBoard = require('./GameBoard.js');

it('Gameboard should include a game field ', () => {
  const player1 = GameBoard();
  expect(player1).toEqual({
    gameField: {
      a: [{ name: 'ship-1', position: 0, hit: 'no' }, ''],
      b: ['', ''],
    },
  });
});

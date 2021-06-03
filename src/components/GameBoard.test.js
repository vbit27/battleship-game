const GameBoard = require('./GameBoard.js');

xtest('should ', () => {
  const player1 = GameBoard();
  player1.addShip(1);
  expect(player1).toEqual(null);
});

import Ship from './Ship';

const GameBoard = () => {
  let gameField = {
    a: ['', ''],
    b: ['', ''],
  };

  let ships = [];

  const addShip = (length) => {
    ships.push(Ship(length));
  };

  addShip(1);

  return {
    ships,
    gameField,
  };
};

module.exports = GameBoard;

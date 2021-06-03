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

  return {
    ships,
    addShip,
  };
};

module.exports = GameBoard;

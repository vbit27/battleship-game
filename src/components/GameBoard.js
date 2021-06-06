import Ship from './Ship';

const GameBoard = () => {
  let gameField = ['', ''];

  let ships = [];

  const addShiptoArray = (name, length) => {
    ships.push(Ship(name, length));
    addShiptToGameField(ships);
  };

  const addShiptToGameField = (ships) => {
    gameField[0] = { name: ships[0].name, position: 0, hit: 'no' };
  };

  addShiptoArray('ship-1', 1);

  return {
    gameField,
  };
};

module.exports = GameBoard;
